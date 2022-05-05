import React from 'react';

import './Heading.scss';

const Heading = (props) => {
	return (
		<div className="main-header-wrapper">
			<header className="main-header">{props.children}</header>
		</div>
	);
};
export default Heading;
