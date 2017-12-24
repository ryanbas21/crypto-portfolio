import { compose } from 'ramda';
import { put, call, takeEvery } from 'redux-saga/effects';
import { RETRIEVE_COINS, isSearching, error, addCoins } from './home.reducer';
import { coinMarketCapData } from './api';

export function* watchRetrieveCoins() {
    yield compose(put, isSearching)();
    yield takeEvery(RETRIEVE_COINS, callRetrieveCoins);
}

export function* callRetrieveCoins(action) {
    const coins = yield call(coinMarketCapData)
    yield coins.fork(
        compose(put, error),
        compose(put, addCoins)
    );
    yield compose(put, isSearching)();
}
