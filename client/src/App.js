import React, { Fragment } from 'react';
import {
	Switch,
	Route,
	withRouter,
	BrowserRouter as Router,
	Redirect,
} from 'react-router-dom';

import { fab } from '@fortawesome/free-brands-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import Home from './Home/Home';

import './App.css';
import MainNavigation from './Heading/MainNavigation/MainNavigation';

library.add(fab, faAngleUp);

const App = () => {
	return (
		<Fragment>
			<MainNavigation />
			<Router>
				<Switch>
					<Route exact path="/" render={() => <Home />} />
					<Redirect to="/" />
				</Switch>
			</Router>
		</Fragment>
	);
};

export default withRouter(App);
