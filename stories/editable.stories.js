import React from 'react';

import {storiesOf} from '@storybook/react';
import {Editable} from '../src/components';

storiesOf('Editable', module)
	.add('Editable Component', () => <Editable />)
	.add('Added a value', () => <Editable value={'Hello'} />)
	.add('Passing children', () => (
		<Editable value={'Hello'}>
			{({value, ...props}) => <div {...props}> Child, {value} </div>}
		</Editable>
	));
