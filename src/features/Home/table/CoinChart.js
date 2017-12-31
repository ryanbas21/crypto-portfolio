import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {map} from 'sanctuary';
import {Table} from 'react-bootstrap';
import Head from './head';
import Body from './body';

const CoinChart = props => (
	<Fragment>
		<Table hover responsive striped>
			<Head />
			<Body coins={props.coins} />
		</Table>
	</Fragment>
);

export default CoinChart;

CoinChart.propTypes = {
	coins: PropTypes.array.isRequired
};
