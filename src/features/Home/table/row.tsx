import React from 'react';
import PropTypes from 'prop-types';

interface Value {
	name: string;
	rank: string;
	symbol: string;
	'24h_volume_usd': number;
	'percent_change_24h': number;
	price_usd: number;
}
interface RowProps {
	value: Value
}
const Row: React.SFC<RowProps> = ({value}) => (
	<tr key={value.name}>
		<td>{value.rank}</td>
		<td>{value.name}</td>
		<td>{value.symbol}</td>
		<td>{`$ ${value.price_usd.toLocaleString()}`} </td>
		<td>{`$ ${value['24h_volume_usd'].toLocaleString()}`} </td>
		<td style={value['percent_change_24h'] > 0 ? {color: 'green'} : {color: 'red'}}>
			{`${value.percent_change_24h} %`}
		</td>
	</tr>
);

export default Row;

Row.propTypes = {
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
