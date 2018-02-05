import { concat, negate } from 'sanctuary';
import { getTotalCallback } from './utils';
import { IAccumulatedCoin } from './utils/index';
import { IRootAction } from '../../store/root-action';

// action types
type ADD_COIN = 'ADD_COIN';
type SELL_COIN = 'SELL_COIN';

export interface ICoin {
	id: string;
	name: string;
	symbol: string;
	rank: number;
	price_usd: number;
	total: number;
}
export const ADD_COIN: ADD_COIN = 'ADD_COIN';
export function addCoin(coin: ICoin, total: number) {
	return {
		type: ADD_COIN,
		payload: { total, ...coin }
	};
}

export const SELL_COIN: SELL_COIN = 'SELL_COIN';
export function sellCoin({ id, name, symbol, rank, price_usd, total }: ICoin) {
	return {
		type: SELL_COIN,
		payload: {
			id,
			name,
			symbol,
			rank,
			price_usd,
			total
		}
	};
}
export function getTotal(state: ICoin[]): IAccumulatedCoin {
	return state.reduce(getTotalCallback, {});
}

export default function(state = [], action: IRootAction): ICoin[] {
	switch (action.type) {
		case ADD_COIN: {
			return concat(state, [action.payload]);
		}
		case SELL_COIN: {
			return concat(state, [{ ...action.payload, total: negate(action.payload.total) }]);
		}
		default: {
			return state;
		}
	}
}

export type PORTFOLIO_TYPES = ADD_COIN | SELL_COIN;
