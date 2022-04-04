import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo2.png';
import './Header.css';

const Header = () => {
	return (
		<Navbar bg="white" expand="lg" className="pt-0">
			<Container>
				<Navbar.Brand href="#home">
					<img
						src={logo}
						width="200"
						className=""
						alt="PlayStation Mania logo"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto fs-5 text-uppercase">
						<NavLink
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
							to="/home"
						>
							Home
						</NavLink>
						<NavLink
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
							to="/reviews"
						>
							Reviews
						</NavLink>
						<NavLink
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
							to="/dashboard"
						>
							Dashboard
						</NavLink>
						<NavLink
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
							to="/blogs"
						>
							Blogs
						</NavLink>
						<NavLink
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
							to="/about"
						>
							About
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
