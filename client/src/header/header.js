import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import ActionBanner from '../components/actionBanner/actionBanner';
import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';

import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

class Header extends React.Component {
	static propTypes = {
		cookies: instanceOf(Cookies).isRequired,
	};
	constructor(props) {
		super(props);

		const { cookies } = props;
		this.state = {
			showBanner: cookies.get('showBanner') || true, //set to false to hide it.
		};
	}
	render() {
		return (
			<Fragment>
				<header>
					<Logo content={this.props.data.logo} />
					<Navigation content={this.props.data.navigation} />
				</header>
				{this.state.showBanner === true && <ActionBanner />}
			</Fragment>
		);
	}
}
export default withCookies(withRouter(Header));
