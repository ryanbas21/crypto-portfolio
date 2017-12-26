import test from 'tape';
import {callRetrieveCoins} from './home.saga';
import {addCoins} from './home.reducer';
import {call, put} from 'redux-saga/effects';
import {isSearching} from './home.reducer';
import coinMarketCapData from './api';

test('Home Saga tests', nest => {
	nest.test('callRetrieveCoins:: Test api call', t => {
		const msg = 'Should return back object to be called';
		const gen = callRetrieveCoins(coinMarketCapData);
		const actual = gen.next().value;
		const expected = call(coinMarketCapData);
		t.same(actual, expected, msg);
		t.same(gen.next().value, put(addCoins([])), 'should call next in saga');
		t.same(gen.next().value, put(isSearching()), 'should call next in saga');
		t.same(gen.next().done, true, 'saga should finish');
		t.end();
	});
});
