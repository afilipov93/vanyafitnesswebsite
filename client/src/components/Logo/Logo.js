import React from 'react';

const Logo = (props) => {
	return (
		<div className="logo">
			<a href="/">
				<img src={props.content.src} alt={props.content.alt} />
			</a>
		</div>
	);
};
export default Logo;
