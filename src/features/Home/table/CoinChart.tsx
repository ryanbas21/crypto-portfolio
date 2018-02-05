import React, {Fragment} from 'react';
import {map} from 'sanctuary';
import {Table} from 'react-bootstrap';
import Head from './head';
import Body from './body';
import { ICoin } from '../../portfolio/portfolio.reducer';

interface CoinChartProps {
	coins: ICoin[];
}
const CoinChart: React.SFC<CoinChartProps> = (props) => (
	<Fragment>
		<Table hover responsive striped>
			<Head />
			<Body coins={props.coins} />
		</Table>
	</Fragment>
);

export default CoinChart;
