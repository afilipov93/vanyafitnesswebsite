import React from 'react';

import './ContentBlock.css';

const ContentBlock = (props) => {
	return (
		<section
			className={
				props.backgroundImage ? 'wrapper wrapper__backgroundImage' : 'wrapper'
			}
			style={
				props.backgroundImage
					? {
							backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3)
        ),url(${props.backgroundImage})`,
					  }
					: {}
			}
		>
			<div className="container">{props.children}</div>
		</section>
	);
};
export default ContentBlock;
