import React from 'react';

import './Steps.css';

export const Steps = (props) => {
	return (
		<div className="step-container">
			<div className="step__header">
				<div className="line" />
				<div className="step__counter">
					<p>{props.count}</p>
				</div>
				<div className="line" />
			</div>
			<div className="step__content">{props.children}</div>
		</div>
	);
};

export const StepsContainer = (props) => {
	return (
		<section className="steps-viewport">
			<div className="steps-container">{props.children}</div>
		</section>
	);
};
