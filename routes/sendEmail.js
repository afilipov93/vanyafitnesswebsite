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
	const message = {
		from: 'Michael Post PT <trainen@michaelpost.nl>',
		to: 'michaelpost@chello.nl',
		subject: 'Nieuwe aanmelding promotie',
		html: `
		<h1>Nieuwe aanmelding!</h1>
		<p>Naam: ${req.body.data.name}</p>
		<p>Telefoon: ${req.body.data.phone}</p>
		<p>E-mail: ${req.body.data.email}</p>
		`,
	};
	transporter.sendMail(message, function (err, data) {
		if (err) {
			res.sendStatus(err.status || 500);
		} else {
			res.sendStatus(200);
		}
	});
});
module.exports = sendEmailRouter;
