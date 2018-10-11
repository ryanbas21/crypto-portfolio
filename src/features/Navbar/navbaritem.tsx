import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {NavItem} from 'react-bootstrap';

interface IRoute {
	name: string;
	route: string;
	active: boolean;
}
export interface INavbar {
	isActive: (a: string) => boolean;
	route: IRoute;
}
const NavbarItem: React.SFC<INavbar> = props => (
	<LinkContainer to={props.route.route}>
		<NavItem
			isActive={props.route.active ? true : false}
			onClick={() => props.isActive(props.route.name)}
		>
			{props.route.name}
		</NavItem>
	</LinkContainer>
);

export default NavbarItem;
