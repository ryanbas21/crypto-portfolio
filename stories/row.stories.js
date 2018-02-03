import React from 'react';

import {storiesOf} from '@storybook/react';
import Row from '../src/features/Home/table/row';

const coin = {
	id:  'bitcoin',
	name: 'Bitcoin',
	symbol: 'BTC',
	rank: '1',
	price_usd: '13789.7',
	'24h_volume_usd': '20000',
	'percent_change_24h': '2'
}

storiesOf('Row', module)
	.add('Row Component', () => <Row value={coin} />)
