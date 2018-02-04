import React from 'react';
import {Editable} from '../../components';

export default (props) => (
	<div>
		Portfolio
		<Editable onSave={() => console.log('saving')} />
	</div>
);
