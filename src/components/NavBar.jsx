import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

const NavBar = () => {
	const history = useHistory();

	const handleLogout = () => {
		history.replace("/login");
	};

	return (
		<>
			<Navbar bg='light' expand='lg'>
				<Container>
					<Navbar.Brand href='/'>Dragon Ball Z</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							<NavLink
								className='nav-link'
								activeClassName='active'
								to='/search'
							>
								Search
							</NavLink>

							<NavLink
								className='nav-link'
								activeClassName='active'
								to='/mans'
							>
								Mans
							</NavLink>

							<NavLink
								className='nav-link'
								activeClassName='active'
								to='/womans'
							>
								Womans
							</NavLink>
						</Nav>

						<div className='d-flex'>
							<Button variant='danger' onClick={handleLogout}>
								Logout
							</Button>
						</div>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default NavBar;
