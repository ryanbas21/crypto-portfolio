import test from 'tape';
import { callRetrieveCoins } from './home.saga';
import { isSearching } from './home.reducer';

test('Home Saga tests', nest => {
	nest.test('callRetrieveCoins:: Test api call', t => {
		const msg = 'Should return back object to be called';
		const gen = callRetrieveCoins();
		const actual = gen.next().value();
		const expected = {};
		t.same(actual, expected, msg);
		t.end();
	});
});
