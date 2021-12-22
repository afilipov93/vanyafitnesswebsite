const sslRedirect = require('heroku-ssl-redirect').default;
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;
const content = require('./websiteContent.json');
const path = require('path');
const nodemailer = require('nodemailer');

app.use(sslRedirect());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/client/build'));
app.use(cors());

// GET website data
app.get('/data', (req, res) => {
	res.json(content);
});

// POST email
app.use('/sendemail', require('./routes/sendEmail'));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));
