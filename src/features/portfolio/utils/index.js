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

	const sumOfValue = add(grabValue(coin), prop('value')(acc[coin.id]));
	const sumTotal = add(grabTotal(coin), grabTotal(acc[coin.id]));

	return {
		...acc,
		[coin.id]: {
			value: sumOfValue,
			total: sumTotal
		}
	};
}

