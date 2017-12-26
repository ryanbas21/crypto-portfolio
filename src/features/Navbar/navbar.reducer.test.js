import test from 'tape';
import NavbarReducer, { search, selectCoins } from './navbar.reducer';

const stateFactory = ({
	Home = {
		coins: [
			{
				id: 'bitcoin',
				name: 'Bitcoin',
				symbol: 'BTC',
				rank: '1',
				price_usd: '13789.7'
			},
			{
				id: 'ethereum',
				name: 'Ethereum',
				symbol: 'ETH',
				rank: '2',
				price_usd: '710.236'
			}
		]
	}
} = {}) => Home;

test('Navbar:: Reducer and Selectors', nest => {
	nest.test('Navbar:: search case', t => {
		const msg = 'Should filter coins based on inclusion of a string';
		const state = ['bitcoin', 'litecoin', 'cardano', 'bitcoin cash'];
		const expected = ['bitcoin', 'bitcoin cash'];
		const action = search('Bit');
		const actual = NavbarReducer(state, action);

		t.same(actual, expected, msg);
		t.end();
	});
	nest.test('Navbar:: selector for coins list', t => {
		const msg = 'should slice all the coins names';
		const state = stateFactory();
		const expected = ['Bitcoin', 'Ethereum'];
		const actual = selectCoins(state);

		t.same(actual, expected, msg);
		t.end();
	});
});
