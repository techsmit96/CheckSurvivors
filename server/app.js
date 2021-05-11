const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('./router/auth'));

app.listen(PORT, function () {
	console.log('Listening on Port 3001');
});
