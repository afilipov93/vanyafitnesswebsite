import React from 'react';
import {
	Switch,
	Route,
	withRouter,
	BrowserRouter as Router,
	Redirect,
} from 'react-router-dom';

import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import Header from './header/header';
import Home from './home/home';
import About from './about/about';
import Contact from './contact/contact';
import RepMaxCalculator from './rep-max-calculator/rep-max-calculator';
import Footer from './footer/footer';
import Lessons from './lessons/lessons';
import Discount from './discount/discount';

import './App.scss';

library.add(fab);

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { response: '', loading: true };
	}

	componentDidMount() {
		this.getData();
	}

	getData = () => {
		fetch('/data')
			.then((res) => res.json())
			.then((data) => this.setState({ response: data, loading: false }));
	};
	render() {
		if (this.state.loading) {
			return <div>Loading</div>;
		}
		return (
			<Router>
				<Header data={this.state.response.websiteContentData} />
				<Switch>
					<Route
						exact
						path="/"
						render={(props) => (
							<Home {...props} data={this.state.response.websiteContentData} />
						)}
					/>
					<Route
						path="/over"
						render={(props) => (
							<About {...props} data={this.state.response.websiteContentData} />
						)}
					/>
					<Route
						path="/contact"
						render={(props) => (
							<Contact
								{...props}
								data={this.state.response.websiteContentData}
							/>
						)}
					/>
					<Route
						path="/lessen"
						render={(props) => (
							<Lessons
								{...props}
								data={this.state.response.websiteContentData}
							/>
						)}
					/>
					<Route path="/max-rep-calculator">
						<RepMaxCalculator />
					</Route>
					<Route
						path="/actie"
						render={(props) => (
							<Discount
								{...props}
								data={this.state.response.websiteContentData}
							/>
						)}
					/>
					<Redirect to="/" />
				</Switch>
				<Footer data={this.state.response.websiteContentData} />
			</Router>
		);
	}
}

export default withRouter(App);
