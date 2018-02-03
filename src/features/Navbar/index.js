import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Navbar, Nav} from 'react-bootstrap';
import {map} from 'sanctuary';
import {Search} from '../../components';
import NavbarItem from './navbaritem';

class Navigation extends Component {
	constructor() {
		super();
		this.isActive.bind(this);
		this.state = {
			routes: [
				{route: '/', name: 'home', active: false},
				{route: '/portfolio', name: 'portfolio', active: false}
			]
		};
	}
	isActive(route) {
		this.setState(state => ({
			routes: routes.map(
				r => (r.name === route ? {...r, active: true} : {...r, active: false})
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

function mapStateToProps(state) {
	return {};
}
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
