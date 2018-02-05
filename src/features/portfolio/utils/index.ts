import { grabTotal, grabValue, value, total } from './util.functions';
import { ICoin } from '../portfolio.reducer';

export interface IAccumulatedCoin {
	[key: string]: { 
		value: number;
		total: number;
	}
}
export const getTotalCallback = (acc: IAccumulatedCoin , coin: ICoin): IAccumulatedCoin => {
	if (!acc[coin.id]) {
		return {
			...acc,
			[coin.id]: {
				value: grabValue(coin),
				total: grabTotal(coin)
			}
		};
	}
	const val = value(acc, coin),
		  tot = total(acc, coin);
	return {
		...acc,
		[coin.id]: {
			value: tot === 0 ? 0 : val,
			total: total(acc, coin)
		}
	};
};
