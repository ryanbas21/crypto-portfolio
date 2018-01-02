import {prop, compose, concat, not} from 'sanctuary';

export const IS_SEARCHING = 'IS_SEARCHING';
export function isSearching() {
	return {
		type: IS_SEARCHING
	};
}

export const SEARCH = 'SEARCH';
export function searchCoins(search) {
	return {
		type: SEARCH,
		payload: {
			search
		}
	};
}
export const ERROR = 'ERROR';
export function error(error) {
	return {
		type: ERROR,
		payload: error
	};
}
export const ADD_COINS = 'ADD_COINS';
export function addCoins(coins = []) {
	return {
		type: ADD_COINS,
		payload: coins
	};
}
export const RETRIEVE_COINS = 'RETRIEVE_COINS';
export function retrieveCoins() {
	return {
		type: RETRIEVE_COINS
	};
}

export const getCoins = prop('coins');
export const searching = prop('isSearching');

export function initialState() {
	return {
		isSearching: false,
		coins: []
	};
}

function computeSearch(state, action) {
	return {
		...state
	};
}
function computeIsSearching(state, action) {
	return {
		...state,
		isSearching: not(state.isSearching)
	};
}
function computeAddCoins(state, action) {
	return {
		...state,
		coins: action.payload
	};
}
export default function(state = initialState(), action = ({} = {type: ''})) {
	switch (action.type) {
		case ADD_COINS: {
			return computeAddCoins(state, action);
		}
		case IS_SEARCHING: {
			return computeIsSearching(state, action);
		}
		case SEARCH: {
			return computeSearch(state, action);
		}
		default: {
			return state;
		}
	}
}
