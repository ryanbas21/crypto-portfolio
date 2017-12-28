import {concat, prop} from 'sanctuary';
import {getTotalCallback} from './utils';

export const ADD_COIN = 'ADD_COIN';
export function addCoin(coin, total) {
	return {
		type: ADD_COIN,
		payload: {total, ...coin}
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
		default: {
			return state;
		}
	}
}
