import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Heading from '../Heading';
import Backdrop from '../../components/Backdrop/Backdrop';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import NavLinks from '../NavLinks/NavLinks';

import './MainNavigation.scss';

const MainNavigation = () => {
	const [drawerIsOpen, setDrawerIsOpen] = useState(false);

	const toggleDrawerHandler = () => {
		setDrawerIsOpen(!drawerIsOpen);
	};
	return (
		<React.Fragment>
			{drawerIsOpen && <Backdrop onClick={toggleDrawerHandler} />}
			<SideDrawer show={drawerIsOpen} onClick={toggleDrawerHandler}>
				<nav className="main-navigation__drawer-nav">
					<NavLinks />
				</nav>
			</SideDrawer>

			<Heading>
				<button
					className="main-navigation__menu-btn"
					onClick={toggleDrawerHandler}
				>
					<span />
					<span />
					<span />
				</button>
				<h1 className="main-navigation__title">
					<Link to="/"></Link>
				</h1>
				<nav className="main-navigation__header-nav">
					<NavLinks />
				</nav>
			</Heading>
		</React.Fragment>
	);
};
export default MainNavigation;
