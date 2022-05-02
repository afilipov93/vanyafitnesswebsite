import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.scss';

const NavLinks = () => {
	return (
		<ul>
			<li>
				<NavLink exact to="/">
					Home
				</NavLink>
			</li>
		</ul>
	);
};
export default NavLinks;
