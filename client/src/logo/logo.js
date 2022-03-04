import React from 'react';

class Logo extends React.Component {
	render() {
		return (
			<div className="logo">
				<a href="/">
					<h3>{this.props.content.title}</h3>
					{/* <img src={this.props.content.src} alt={this.props.content.alt} /> */}
				</a>
			</div>
		);
	}
}
export default Logo;
