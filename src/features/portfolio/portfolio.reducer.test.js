import test from 'ava';
import portfolioReducer, {sellCoin, addCoin, getTotal} from './portfolio.reducer';

const stateFactory = (
	coins = [
		{
			id: 'ethereum',
			name: 'Ethereum',
			symbol: 'ETH',
			rank: '2',
			price_usd: '710.236'
		}
	]
) => coins;

test('portfolioReducer:: AddCoin', t => {
	const state = stateFactory([]);
	const coin = {
		id: 'bitcoin',
		name: 'Bitcoin',
		symbol: 'BTC',
		rank: '1',
		price_usd: '3'
	};
	const action = addCoin(coin, 50);
	const actual = portfolioReducer(state, action);
	const expected = [
		{
			id: 'bitcoin',
			name: 'Bitcoin',
			symbol: 'BTC',
			rank: '1',
			price_usd: '3',
			total: 50
		}
	];

	t.deepEqual(actual, expected);
});
test('portfolioReducer:: returns default state', t => {
	const expected = [];
	const actual = portfolioReducer();

	t.deepEqual(actual, expected);
});
test.skip('portfolioReducer:: getTotal', t => {
	t.plan(2);
	const state = [
		{
			id: 'ethereum',
			name: 'Ethereum',
			symbol: 'ETH',
			rank: '2',
			price_usd: 10,
			total: 1
		},
		{
			id: 'ethereum',
			name: 'Ethereum',
			symbol: 'ETH',
			rank: '2',
			price_usd: 5,
			total: 2
		},
		{
			id: 'bitcoin',
			name: 'Bitcoin',
			symbol: 'BTC',
			rank: '1',
			price_usd: 20,
			total: 1
		},
		{
			id: 'bitcoin',
			name: 'Bitcoin',
			symbol: 'BTC',
			rank: '1',
			price_usd: 10,
			total: 2
		}
	];
	const actual = getTotal(state);
	const expected = {
		bitcoin: {
			total: 3,
			value: 30
		},
		ethereum: {
			total: 3,
			value: 15
		}
	};

	t.deepEqual(actual, expected);
	const newState = state.concat([
		{
			id: 'bitcoin',
			name: 'Bitcoin',
			symbol: 'BTC',
			rank: '1',
			price_usd: 10,
			total: 2
		},
		{
			id: 'bitcoin',
			name: 'Bitcoin',
			symbol: 'BTC',
			rank: '1',
			price_usd: 10,
			total: -2
		}
	]);

	const actual2 = getTotal(newState);
	t.deepEqual(actual2, expected);
});
test('portfolioReducer:: sellCoin', t => {
	const state = [
		{
			id: 'ethereum',
			name: 'Ethereum',
			symbol: 'ETH',
			rank: '2',
			price_usd: 10,
			total: 1
		},
		{
			id: 'ethereum',
			name: 'Ethereum',
			symbol: 'ETH',
			rank: '2',
			price_usd: 5,
			total: 2
		},
		{
			id: 'bitcoin',
			name: 'Bitcoin',
			symbol: 'BTC',
			rank: '1',
			price_usd: 20,
			total: 1
		},
		{
			id: 'bitcoin',
			name: 'Bitcoin',
			symbol: 'BTC',
			rank: '1',
			price_usd: 10,
			total: 2
		}
	];
	const coin = {
		id: 'bitcoin',
		name: 'Bitcoin',
		symbol: 'BTC',
		rank: '1',
		price_usd: 20,
		total: 1
	};
	const action = sellCoin(coin);
	const expected = [
		{
			id: 'ethereum',
			name: 'Ethereum',
			symbol: 'ETH',
			rank: '2',
			price_usd: 10,
			total: 1
		},
		{
			id: 'ethereum',
			name: 'Ethereum',
			symbol: 'ETH',
			rank: '2',
			price_usd: 5,
			total: 2
		},
		{
			id: 'bitcoin',
			name: 'Bitcoin',
			symbol: 'BTC',
			rank: '1',
			price_usd: 20,
			total: 1
		},
		{
			id: 'bitcoin',
			name: 'Bitcoin',
			symbol: 'BTC',
			rank: '1',
			price_usd: 10,
			total: 2
		},
		{
			id: 'bitcoin',
			name: 'Bitcoin',
			symbol: 'BTC',
			rank: '1',
			price_usd: 20,
			total: -1
		}
	];
	const actual = portfolioReducer(state, action);

	t.deepEqual(actual, expected);
});
