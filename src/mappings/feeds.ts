import { dataSource } from '@graphprotocol/graph-ts';
import { updateAggregates } from '../entities/Aggregate';
import { createPrice } from '../entities/Price';
import { ensurePriceFeed } from '../entities/PriceFeed';
import { AnswerUpdated } from '../generated/AggregatorProxy';

export function handleAnswerUpdated(event: AnswerUpdated): void {
  let context = dataSource.context();
  let tradingPair = context.getString('tradingPair');
  updateAggregates(event);
  createPrice(event, ensurePriceFeed(event, tradingPair));
}
