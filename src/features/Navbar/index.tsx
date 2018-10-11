import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Navbar, Nav} from 'react-bootstrap';
import {map} from 'sanctuary';
import {Search} from '../../components';
import NavbarItem from './navbaritem';
import { RootState } from '../../reducers/index';

interface Route {
	route: string;
	name: string;
	active: boolean;
}
interface NavigationState {
	routes: Route[];
}
interface NavigationProps {
}
class Navigation extends Component<NavigationProps, NavigationState> {
	constructor(props: NavigationProps) {
		super(props);
		this.isActive.bind(this);
		this.state = {
			routes: [
				{route: '/', name: 'home', active: false},
				{route: '/portfolio', name: 'portfolio', active: false}
			]
		};
	}
	isActive(route: string ) {
		this.setState(state => ({
			routes: this.state.routes.map(
				(r: Route) => (r.name === route ? {...r, active: true} : {...r, active: false})
			)
		}));
	}

	render() {
		return (
			<Navbar inverse collapseOnSelect>
				<Nav activeKey={1}>
					{map(
						route => (
							<NavbarItem key={route.name} route={route} isActive={this.isActive} />
						),
						this.state.routes
					)}
				</Nav>
				<Navbar.Form pullRight>
					<Search onEnter={() => {}} />
				</Navbar.Form>
			</Navbar>
		);
	}
}

function mapStateToProps(state: RootState) {
	return {};
}
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
