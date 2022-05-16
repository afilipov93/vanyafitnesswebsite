import React from 'react';
import Button from '../Button/Button';

import './Activation.css';

const Activation = (props) => {
	return (
		<div className="wrapper">
			<div className="activation-wrapper">
				<div className="activation-container">
					<div className="activation-content">
						<div>{props.message}</div>
						<Button secondair onClick={props.onClick}>
							{props.buttonText}
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Activation;
