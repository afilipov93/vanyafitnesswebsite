import React, { Fragment, useState } from 'react';
import {
	Switch,
	Route,
	BrowserRouter as Router,
	Redirect,
} from 'react-router-dom';

import { fab } from '@fortawesome/free-brands-svg-icons';
import { faAngleUp, faXmark } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import './App.css';

import MainNavigation from './components/Heading/MainNavigation/MainNavigation';
import Home from './Home/Home';
import Modal from './components/Modal/Modal';
import ContactForm from './components/ContactForm';
import RepMaxCalculator from './RepMaxCalculator/RepMaxCalculator';
import Footer from './components/Footer/Footer';

library.add(fab, faAngleUp, faXmark);

const App = () => {
	const [showModal, setShowModal] = useState(false);
	const [service, setService] = useState('');

	const showModalHandler = () => {
		setShowModal(!showModal);
	};
	const setPackageHandler = (data) => {
		setService(data);
	};
	const clearPackage = () => {
		setService('');
	};
	return (
		<Fragment>
			<Router>
				<MainNavigation modalHandler={() => showModalHandler()} />
				<Switch>
					<Route
						exact
						path="/"
						render={() => (
							<Home
								setPackage={(data) => setPackageHandler(data)}
								modalHandler={() => showModalHandler()}
							/>
						)}
					/>
					<Route path="/calculator" render={() => <RepMaxCalculator />} />
					<Redirect to="/" />
				</Switch>
				<Footer />
			</Router>
			<Modal
				show={showModal}
				header="Aanvraag"
				image="/SMALL/1V0A3901.jpg"
				onCancel={() => showModalHandler()}
			>
				<ContactForm package={service} cleanup={() => clearPackage()} />
			</Modal>
		</Fragment>
	);
};

export default App;
