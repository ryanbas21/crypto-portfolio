import {grabTotal, grabValue, value, total} from './util.functions';

export const getTotalCallback = (acc, coin) => ({
	...acc,
	[coin.id]: !acc[coin.id]
		? {
				value: grabValue(coin),
				total: grabTotal(coin)
			}
		: {
				value: value(coin),
				total: total(coin)
			}
});
