import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { withRouter, NavLink } from 'react-router-dom';

class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = { checked: false };
	}
	handleCheck() {
		this.setState((prevState) => ({ checked: !prevState.checked }));
	}
	render() {
		const navItem = this.props.content.map(({ item }) => (
			<li key={item.name} className={item.highlight ? 'highlight' : ''}>
				<NavLink to={item.link} onClick={() => this.handleCheck()}>
					{item.name}
				</NavLink>
			</li>
		));

		return (
			<div className="main-navigation">
				<label htmlFor="toggle-nav" onClick={() => this.handleCheck()}>
					{this.state.checked ? (
						<FontAwesomeIcon icon={faTimes} />
					) : (
						<FontAwesomeIcon icon={faBars} />
					)}
				</label>
				<input
					type="checkbox"
					id="toggle-nav"
					checked={this.state.checked}
					readOnly
				/>
				<nav>
					<ul>{navItem}</ul>
				</nav>
			</div>
		);
	}
}
export default withRouter(Navigation);
