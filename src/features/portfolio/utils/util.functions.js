import {prop, add} from 'sanctuary';

export const grabTotal = prop('total');
export const grabValue = prop('price_usd');
export const value = (acc, coin) => add(grabValue(coin), prop('value')(acc[coin.id]));
export const total = (acc, coin) => add(grabTotal(coin), grabTotal(acc[coin.id]));
