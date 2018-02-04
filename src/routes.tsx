import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Home, Portfolio, Navigation } from './features';
import { history } from './store/index';

const Routes: React.SFC<{}> = () => (
	<ConnectedRouter history={history}>
		<Router>
			<Fragment>
				<Navigation />
				<Route exact path="/" component={Home} />
				<Route path="/portfolio" component={Portfolio} />
			</Fragment>
		</Router>
	</ConnectedRouter>
);

export default Routes;
