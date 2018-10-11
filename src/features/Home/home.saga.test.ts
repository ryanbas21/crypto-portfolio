import test from 'ava';
import { callRetrieveCoins } from './home.saga';
import { addCoins } from './home.reducer';
import { call, put } from 'redux-saga/effects';
import { isSearching } from './home.reducer';
import coinMarketCapData from './api';

test('callRetrieveCoins:: Test api call', t => {
	const msg = 'Should return back object to be called';
	const gen = callRetrieveCoins(coinMarketCapData);
	const actual = gen.next().value;
	const expected = call(coinMarketCapData);
	t.deepEqual(actual, expected, msg);
	t.deepEqual(gen.next().value, put(addCoins([])), 'should call next in saga');
	t.deepEqual(gen.next().value, put(isSearching()), 'should call next in saga');
	t.deepEqual(gen.next().done, true, 'saga should finish');
});
