import fs from 'fs';
import path from 'path';
import glob from 'glob';
import yargs from 'yargs';
import mustache from 'mustache';
import config from './config';

yargs
  .command('flatten', 'Flatten the generated code.', () => {
    const generated = path.resolve(__dirname, '..', 'src', 'generated');
    const globbed = glob.sync('**/*', { cwd: path.join(generated) });
    const files = globbed.filter(item => {
      const stats = fs.statSync(path.join(generated, item));
      return stats.isFile();
    });

    const directories = globbed.filter(item => {
      if (item === 'templates/Aggregator') {
        return false;
      }
      const stats = fs.statSync(path.join(generated, item));
      return stats.isDirectory();
    });

    files.forEach(item => {
      const from = path.join(generated, item);
      const to = path.join(generated, path.basename(item));
      fs.renameSync(from, to);
    });

    directories.forEach(item => {
      fs.rmdirSync(path.join(generated, item), { recursive: true });
    });
  })
  .command(
    'graphgen [network]',
    'Generate the subgraph based for the configured feeds.',
    yargs => {
      yargs.positional('network', {
        type: 'string',
        default: 'mainnet',
        describe: 'target network',
      });
    },
    function(argv: { network: string }) {
      const { network } = argv;
      console.log('NETWORK: ', network);
      const networkConfig = config[network];
      if (!networkConfig) {
        throw new Error(`Unkown Network ${network}`);
      }

      const pairs = networkConfig.map(item => ({
        network,
        name: item.pair.replace('/', ''),
        filename: item.pair.replace('/', '').toLowerCase(),
        ...item,
      }));

      const templatePath = path.join(__dirname, '../subgraph.mustache');
      const template = fs.readFileSync(templatePath, 'utf8');

      const subgraphPath = path.join(__dirname, '../subgraph.yaml');
      const subgraph = mustache.render(template, { pairs, network });

      fs.writeFileSync(subgraphPath, subgraph, 'utf8');

      pairs.forEach(item => {
        const feedsPath = path.join(__dirname, '../src/mappings/aggregators');
        const templatePath = path.join(feedsPath, 'aggregator.mustache');
        const template = fs.readFileSync(templatePath, 'utf8');

        const mappingPath = path.join(feedsPath, `${item.filename}.ts`);
        const mapping = mustache.render(template, item);

        fs.writeFileSync(mappingPath, mapping, 'utf8');
      });
    },
  )
  .help().argv;
