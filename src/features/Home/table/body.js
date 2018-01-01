import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {map} from 'sanctuary';
import Row from './row';

function Body(props) {
	return (
		<Fragment>
			<tbody>{map(value => <Row value={value} />, props.coins)}</tbody>
		</Fragment>
	);
}

export default Body;

Body.propTypes = {
	coins: PropTypes.array.isRequired
};
