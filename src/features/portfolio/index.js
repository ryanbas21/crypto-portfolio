import React from 'react';
import {Editable, AddCoin} from '../../components';
export default props => (
	<div>
		Portfolio
		<Editable onSave={() => console.log('saving')} />
		<AddCoin />
	</div>
);
