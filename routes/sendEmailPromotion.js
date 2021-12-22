const express = require('express');
const sendEmailRouter = express.Router();
const nodemailer = require('nodemailer');

// Connect to Email server
const transporter = nodemailer.createTransport({
	host: 'mail.mijndomein.nl',
	port: 587,
	secure: false,
	auth: {
		user: 'trainen@michaelpost.nl',
		pass: 'c7hoVXUGKtFkQtBMgPw*DHfA',
	},
});

transporter.verify((err, succes) => {
	err
		? console.log('validatie mislukt: ' + err)
		: console.log(`Send messages: ${succes}`);
});

sendEmailRouter.post('/', (req, res, next) => {
	const messageOwner = {
		from: 'Michael Post PT <trainen@michaelpost.nl>',
		to: 'trainen@michaelpost.nl',
		subject: 'Nieuwe aanmelding promotie',
		html: `
		<h1>Nieuwe aanmelding via de promotie!</h1>
		<p>Naam: ${req.body.data.name}</p>
		<p>Telefoon: ${req.body.data.phone}</p>
		<p>E-mail: ${req.body.data.email}</p>
		`,
	};
	const messageSender = {
		from: 'Michael Post PT <trainen@michaelpost.nl>',
		to: req.body.data.email,
		subject: 'Bedankt voor je aanmelding',
		html: `
		<h1>Aanmelding gelukt!</h1>
		<p>Leuk dat je met mij in contact wil komen. Ik neem zo snel mogelijk contact met je op om een afspraak te plannen. Dit zijn de gegevens die naar mij toe hebt gestuurd:</p>
		<p>Naam: ${req.body.data.name}</p>
		<p>Telefoon: ${req.body.data.phone}</p>
		<p>E-mail: ${req.body.data.email}</p>
		<p>Klopt er iets niet? Vul dan het formulier op de website nog een keer in.</p>
		<p>Met sportieve groet,<br>Michael Post</p>
		`,
	};

	Promise.all([
		transporter.sendMail(messageOwner),
		transporter.sendMail(messageSender),
	])
		.then(res.sendStatus(200))
		.catch((err) => res.sendStatus(err.status || 500));
});
module.exports = sendEmailRouter;
