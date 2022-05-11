import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Dropdown.css';

const Dropdown = (props) => {
	const [showText, setShowText] = useState(false);
	const [biggestHeight, setBiggestHeight] = useState();

	useEffect(() => {
		window.addEventListener('resize', setEqualheight);
		setEqualheight();
		return () => {
			window.removeEventListener('resize', setEqualheight);
		};
	}, []);

	const setEqualheight = () => {
		const items = document.getElementsByClassName('equalHeight');
		const comparison = Array.from(items);
		let elementHeights = [].map.call(comparison, (item) => item.offsetHeight);

		setBiggestHeight(Math.max(...elementHeights));
	};

	const showTextHandler = () => {
		setShowText(!showText);
	};

	return (
		<section className="dropdown-container">
			<div
				className="title-container equalHeight"
				onClick={showTextHandler}
				style={{ height: biggestHeight }}
			>
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
