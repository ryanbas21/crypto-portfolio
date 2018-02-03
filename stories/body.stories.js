import React from 'react';

import {storiesOf} from '@storybook/react';
import Body from '../src/features/Home/table/body';

const coins = [ {
	id:  'bitcoin',
	name: 'Bitcoin',
	symbol: 'BTC',
	rank: '1',
	price_usd: '13789.7',
	'24h_volume_usd': '20000',
	'percent_change_24h': '2'
},
	{
		id: 'ethereum',
		name: 'Ethereum',
		symbol: 'ETH',
		rank: '2',
		price_usd: '710.236',
		'24h_volume_usd': '2000',
		'percent_change_24h': '2'
	}
]

storiesOf('Body', module)
	.add('Body Component', () => <Body coins={coins} />)
