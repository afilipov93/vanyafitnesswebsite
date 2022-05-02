import React from 'react';

import './Heading.scss';

const Heading = (props) => {
	return <header className="main-header">{props.children}</header>;
};
export default Heading;
