interface assetPair {
  pair: string;
  address: string;
  block: number;
}

interface Config {
  [id: string]: assetPair[];
}

const config: Config = {
  mainnet: [
    {
      pair: 'GBP/USD',
      address: '0x5c0Ab2d9b5a7ed9f470386e82BB36A3613cDd4b5',
      block: 10606426,
    },
    {
      pair: 'AUD/USD',
      address: '0x77F9710E7d0A19669A13c055F62cd80d313dF022',
      block: 10606426,
    },
    {
      pair: 'CHF/USD',
      address: '0x449d117117838fFA61263B61dA6301AA2a88B13A',
      block: 10606425,
    },
    {
      pair: 'EUR/USD',
      address: '0xb49f677943BC038e9857d61E7d053CaA2C1734C1',
      block: 10606428,
    },
    {
      pair: 'CAD/USD',
      address: '0xa34317DB73e77d453b1B8d04550c44D10e981C8e',
      block: 11471937,
    },
    {
      pair: 'CNY/USD',
      address: '0xeF8A4aF35cd47424672E3C590aBD37FBB7A7759a',
      block: 11831944,
    },
    {
      pair: 'JPY/USD',
      address: '0xBcE206caE7f0ec07b545EddE332A47C2F75bbeb3',
      block: 10606503,
    },
    {
      pair: 'KRW/USD',
      address: '0x01435677FB11763550905594A16B645847C1d0F3',
      block: 11870540,
    },
    {
      pair: 'BRL/USD',
      address: '0x971E8F1B779A5F1C36e1cd7ef44Ba1Cc2F5EeE0f',
      block: 12233215,
    },
    {
      pair: 'IDR/USD',
      address: '0x91b99C9b75aF469a71eE1AB528e8da994A5D7030',
      block: 13589555,
    },
    {
      pair: 'INR/USD',
      address: '0x605D5c2fBCeDb217D7987FC0951B5753069bC360',
      block: 12188611,
    },
    {
      pair: 'NGN/USD',
      address: '0x3e59bc23ea3f39e69b5e662B6fC5e7e6D22B6914',
      block: 12362954,
    },
    {
      pair: 'NZD/USD',
      address: '0x3977CFc9e4f29C184D4675f4EB8e0013236e5f3e',
      block: 12367603,
    },
    {
      pair: 'PHP/USD',
      address: '0x9481e7ad8BE6BbB22A8B9F7B9fB7588d1df65DF6',
      block: 12375628,
    },
    {
      pair: 'RUB/USD',
      address: '0x73A11E47325e3C9b6a48B8ed48Ee0ba89109FB75',
      block: 12238874,
    },
    {
      pair: 'SGD/USD',
      address: '0xe25277fF4bbF9081C75Ab0EB13B4A13a721f3E13',
      block: 11910478,
    },
    {
      pair: 'TRY/USD',
      address: '0xB09fC5fD3f11Cf9eb5E1C5Dba43114e3C9f477b5',
      block: 12058475,
    },
    {
      pair: 'ZAR/USD',
      address: '0x438F81D95761d7036cd2617295827D9d01Cf593f',
      block: 12369662,
    },
  ],
  'arbitrum-one': [
    {
      pair: 'AUD/USD',
      address: '0x9854e9a850e7C354c1de177eA953a6b1fba8Fc22',
      block: 219586,
    },
    {
      pair: 'CNY/USD',
      address: '0xcC3370Bde6AFE51e1205a5038947b9836371eCCb',
      block: 222076,
    },
    {
      pair: 'EUR/USD',
      address: '0xA14d53bC1F1c0F31B4aA3BD109344E5009051a84',
      block: 219574,
    },
    {
      pair: 'CHF/USD',
      address: '0xe32AccC8c4eC03F6E75bd3621BfC9Fbb234E1FC3',
      block: 2193176,
    },
    {
      pair: 'KRW/USD',
      address: '0x85bb02E0Ae286600d1c68Bb6Ce22Cc998d411916',
      block: 219564,
    },
    {
      pair: 'PHP/USD',
      address: '0xfF82AAF635645fD0bcc7b619C3F28004cDb58574',
      block: 222077,
    },
  ],
  matic: [
    {
      pair: 'EUR/USD',
      address: '0x73366fe0aa0ded304479862808e02506fe556a98',
      block: 16825682,
    },
    {
      pair: 'GBP/USD',
      address: '0x099a2540848573e94fb1Ca0Fa420b00acbBc845a',
      block: 16648665,
    },
    {
      pair: 'CAD/USD',
      address: '0xACA44ABb8B04D07D883202F99FA5E3c53ed57Fb5',
      block: 16648523,
    },
    {
      pair: 'CNY/USD',
      address: '0x04bB437Aa63E098236FA47365f0268547f6EAB32',
      block: 25270530,
    },
  ],
};

export default config;
