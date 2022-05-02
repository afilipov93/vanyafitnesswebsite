import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Dropdown.css';

const Dropdown = (props) => {
	const [showText, setShowText] = useState(false);

	const showTextHandler = () => {
		setShowText(!showText);
	};
	return (
		<section className="dropdown-container">
			<div className="title-container" onClick={showTextHandler}>
				<div className="title-content">
					<p>{props.title}</p>
					<FontAwesomeIcon
						icon="angle-up"
						className={showText ? 'rotate icon' : 'icon'}
					/>
				</div>
			</div>
			<div
				className={
					showText
						? 'dropdown-content-container show'
						: 'dropdown-content-container'
				}
			>
				{props.children}
			</div>
		</section>
	);
};

export default Dropdown;
