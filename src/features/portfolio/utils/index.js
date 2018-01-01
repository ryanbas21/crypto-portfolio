import {prop, add} from 'sanctuary';

export function getTotalCallback(acc, coin) {
	const grabTotal = prop('total');
	const grabValue = prop('price_usd');
	if (!acc[coin.id]) {
		acc[coin.id] = {
			value: grabValue(coin),
			total: grabTotal(coin)
		};
		return acc;
	}

	const total = add(grabTotal(coin), grabTotal(acc[coin.id]));
	const value = total > 0 ? add(grabValue(coin), prop('value')(acc[coin.id])) : 0;

	return {
		...acc,
		[coin.id]: {
			value,
			total
		}
	};
}
