import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const Button = (props) => {
	if (props.href) {
		return (
			<a
				className={`btn ${(props.primair && 'primair') || ''} ${
					(props.secondair && 'secondair') || ''
				} ${(props.danger && 'danger') || ''}`}
				href={props.href}
			>
				{props.children}
			</a>
		);
	}
	if (props.to) {
		return (
			<Link
				to={props.to}
				exact={props.exact}
				className={`btn ${(props.primair && 'primair') || ''} ${
					(props.secondair && 'secondair') || ''
				} ${(props.danger && 'danger') || ''}`}
			>
				{props.children}
			</Link>
		);
	}
	return (
		<button
			className={`btn ${(props.primair && 'primair') || ''} ${
				(props.secondair && 'secondair') || ''
			} ${(props.danger && 'danger') || ''}`}
			type={props.type}
			onClick={props.onClick}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	);
};
export default Button;
