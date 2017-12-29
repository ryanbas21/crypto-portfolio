import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'sanctuary';
import {Table} from 'react-bootstrap';

const CoinChart = props => (
	<div>
		<Table hover responsive striped>
			<thead>
				<tr>
					<th>Rank</th>
					<th>Name</th>
					<th>symbol</th>
					<th>Price [USD]</th>
					<th>24hr Volume [USD] </th>
					<th>24hr Change</th>
				</tr>
			</thead>
			<tbody>
				{map(
					value => (
						<tr key={value.name}>
							<td>{value.rank}</td>
							<td>{value.name}</td>
							<td>{value.symbol}</td>

							<td>{`$ ${value.price_usd.toLocaleString({currency: 'usd'})}`} </td>

							<td>{`$ ${value['24h_volume_usd'].toLocaleString()}`} </td>

							<td
								style={
									value['value.percent_change_24h'] > 0
										? {color: 'green'}
										: {color: 'red'}
								}
							>
								{`${value.percent_change_24h} %`}
							</td>
						</tr>
					),
					props.coins
				)}
			</tbody>
		</Table>
	</div>
);

export default CoinChart;

CoinChart.propTypes = {
	coins: PropTypes.array.isRequired
};
