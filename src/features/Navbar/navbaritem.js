import React from 'react';
import PropTypes from 'prop-types';
import {LinkContainer} from 'react-router-bootstrap';
import {NavItem} from 'react-bootstrap';

const NavbarItem = props => (
	<LinkContainer to={props.route.route}>
		<NavItem
			isActive={props.route.active ? true : false}
			onClick={() => props.isActive(props.route.name)}>
			{props.route.name}
		</NavItem>
	</LinkContainer>
);

NavbarItem.propTypes = {
	isActive: PropTypes.func.isRequired,
	route: PropTypes.shape({
		name: PropTypes.string.isRequired,
		route: PropTypes.string.isRequired,
		active: PropTypes.bool
	})
};

export default NavbarItem;
