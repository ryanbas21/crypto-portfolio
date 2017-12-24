import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Search } from '../../components';

export default (props) =>
    <Navbar inverse collapseOnSelect>
        <Nav>
            <LinkContainer to='/'>
                <NavItem>
                    Home
                </NavItem>
            </LinkContainer>
            <LinkContainer to='/portfolio'>
                <NavItem>
                    Portfolio
                </NavItem>
            </LinkContainer>
        </Nav>
            <Navbar.Form pullRight>
                <Search onEnter={() => {}}/>
            </Navbar.Form>
    </Navbar>
