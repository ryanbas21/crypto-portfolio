import React, {Fragment} from 'react';
import {map} from 'sanctuary';

const headTitles = ['Rank', 'Name', 'Symbol', 'Price [USD]', '24hr Volume [USD]', '24hr Change'];
const Head = props => (
	<thead>
		<tr>{map(title => <th>{title}</th>, headTitles)}</tr>
	</thead>
);

export default Head;
