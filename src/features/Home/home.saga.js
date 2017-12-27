import {compose} from 'sanctuary';
import {put, call, takeEvery} from 'redux-saga/effects';
import {RETRIEVE_COINS, isSearching, error, addCoins} from './home.reducer';
import coinMarketCapData from './api';

export function* callRetrieveCoins() {
	const coins = yield call(coinMarketCapData);
	yield compose(put, addCoins)(coins);
	yield compose(put, isSearching)();
}

export function* watchRetrieveCoins() {
	yield compose(put, isSearching)();
	yield takeEvery(RETRIEVE_COINS, callRetrieveCoins);
}
