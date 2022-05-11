import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.scss';

const NavLinks = () => {
	return (
		<ul className="nav-links">
			<li>
				<NavLink exact to="/">
					Home
				</NavLink>
			</li>
		</ul>
	);
};
export default NavLinks;
