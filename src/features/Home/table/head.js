import React, {Fragment} from 'react';

function Head(props) {
	return (
		<Fragment>
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
		</Fragment>
	);
}

export default Head;
