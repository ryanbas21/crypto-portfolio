import axios from 'axios';
import { prop } from 'sanctuary';

export default function coinMarketCapData() {
	return axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=10').then(prop('data'));
}
