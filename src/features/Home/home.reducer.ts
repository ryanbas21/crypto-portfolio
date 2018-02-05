import { prop, not } from 'sanctuary';
import { IRootAction } from '../../store/root-action';
import { ICoin } from '../portfolio/portfolio.reducer';

export type IS_SEARCHING = 'IS_SEARCHING';
export type SEARCH = 'SEARCH';
export type ERROR = 'ERROR';
export type ADD_COINS = 'ADD_COINS';
export type RETRIEVE_COINS = 'RETRIEVE_COINS';

export type HOME_TYPES = IS_SEARCHING | SEARCH | ERROR | ADD_COINS | RETRIEVE_COINS;

export interface IIsSearching {
	type: IS_SEARCHING;
}
export const IS_SEARCHING: IS_SEARCHING = 'IS_SEARCHING';
export function isSearching(): IIsSearching {
	return {
		type: IS_SEARCHING
	};
}

export interface ISearchCoins {
	type: SEARCH;
	payload: any;
}
export const SEARCH: SEARCH = 'SEARCH';
export function searchCoins(search: string): ISearchCoins {
	return {
		type: SEARCH,
		payload: {
			search
		}
	};
}
export const ERROR: ERROR = 'ERROR';
interface IError {
	type: ERROR;
	payload: any;
}
export function error(error: string): IError {
	return {
		type: ERROR,
		payload: error
	};
}
export const ADD_COINS: ADD_COINS = 'ADD_COINS';
export interface IAddCoins {
	type: ADD_COINS;
	payload: any;
}
export function addCoins(coins = []): IAddCoins {
	return {
		type: ADD_COINS,
		payload: coins
	};
}
export const RETRIEVE_COINS: RETRIEVE_COINS = 'RETRIEVE_COINS';
export interface IRetrieveCoins {
	type: RETRIEVE_COINS;
}
export function retrieveCoins() : IRetrieveCoins {
	return {
		type: RETRIEVE_COINS
	};
}

export const getCoins = prop('coins');
export const searching = prop('isSearching');

interface IInitialState {
	isSearching: boolean;
	coins: any[];
}
export function initialState(): IInitialState {
	return {
		isSearching: false,
		coins: []
	};
}

function computeSearch(state: IInitialState, action: IRootAction): IHomeState {
	return {
		...state
	};
}
function computeIsSearching(state: IInitialState, action: IRootAction): IHomeState {
	return {
		...state,
		isSearching: not(state.isSearching)
	};
}

function computeAddCoins(state: IInitialState, action: IRootAction): IHomeState {
	return {
		...state,
		coins: action.payload
	};
}

export interface IHomeState {
	isSearching: boolean;
	coins: ICoin[];
}
export default function(state: IInitialState = initialState(), action: IRootAction) {
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
