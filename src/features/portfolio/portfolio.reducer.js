import {concat, negate, prop} from 'sanctuary';
import {getTotalCallback} from './utils';

export const ADD_COIN = 'ADD_COIN';
export function addCoin(coin, total) {
	return {
		type: ADD_COIN,
		payload: {total, ...coin}
	};
}

export const SELL_COIN = 'SELL_COIN';
export function sellCoin({id, name, symbol, rank, price_usd, total}) {
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
export function getTotal(state) {
	return state.reduce(getTotalCallback, {});
}
export default function(state = [], action = ({} = {type: ''})) {
	switch (action.type) {
		case ADD_COIN: {
			return concat(state, [action.payload]);
		}
		case SELL_COIN: {
			return concat(state, [{...action.payload, total: negate(action.payload.total)}]);
		}
		default: {
			return state;
		}
	}
}
