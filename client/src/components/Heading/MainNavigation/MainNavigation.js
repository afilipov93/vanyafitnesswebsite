import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Heading from '../Heading';
import Backdrop from '../../Backdrop/Backdrop';
import SideDrawer from '../../SideDrawer/SideDrawer';
import NavLinks from '../NavLinks/NavLinks';

import './MainNavigation.scss';
import Button from '../../Button/Button';

const MainNavigation = (props) => {
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
					<Link to="/">
						<img
							src="/SMALL/focused-logo-clean.svg"
							alt="Focused Personal Training by Michael Post"
						/>
					</Link>
				</h1>
				<nav className="main-navigation__header-nav">
					<NavLinks />
				</nav>
				<div className="main-navigation__CTA">
					<Button secondair onClick={props.modalHandler}>
						Start nu
					</Button>
				</div>
			</Heading>
		</React.Fragment>
	);
};
export default MainNavigation;
