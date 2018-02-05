import React, {Fragment} from 'react';
import {map} from 'sanctuary';

const headTitles = ['Rank', 'Name', 'Symbol', 'Price [USD]', '24hr Volume [USD]', '24hr Change'];
interface HeadProps {

}
const Head: React.SFC<HeadProps> = (props) => (
	<thead>
		<tr>{map(title => <th>{title}</th>, headTitles)}</tr>
	</thead>
);

export default Head;
