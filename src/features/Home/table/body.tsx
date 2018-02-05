import React, {Fragment} from 'react';
import {map} from 'sanctuary';
import Row from './row';
import { ICoin } from '../../portfolio/portfolio.reducer';

interface IBodyProps {
	coins: ICoin[];
}
let Body: React.SFC<IBodyProps> = function (props) {
	return (
		<Fragment>
			<tbody>{map(value => <Row value={value} />, props.coins)}</tbody>
		</Fragment>
	);
}

export default Body;
