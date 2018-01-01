import {prop, add} from 'sanctuary';

export const grabTotal = prop('total');
export const grabValue = prop('price_usd');
export const value = coin => add(grabValue(coin), grabValue(acc[coin.id]));
export const total = coin => add(grabTotal(coin), grabTotal(acc[coin.id]));
