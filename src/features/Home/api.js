import axios from 'axios';
import {prop} from 'sanctuary';

const {get} = axios;

export default function coinMarketCapData() {
	return get('https://api.coinmarketcap.com/v1/ticker/?limit=10').then(prop('data'));
}
