const express = require('express');
const router = express.Router();
const predictValidation = require('../middleware/predict_middleware');
const request = require('request-promise');
const { check, body, validationResult } = require('express-validator');

router.get('/', function (req, res) {
	request('http://127.0.0.1:5000/', function (error, response, body) {
		console.error('error:', error); // Print the error
		console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
		console.log('body:', body); // Print the data received
		res.send(body); //Display the response on the website
	});
});
router.get('/hist', async (req, res) => {
	await request(
		'http://127.0.0.1:5000/histogram',
		async (error, response, body) => {
			if (!error && response.statusCode == 200) {
				let base64String = body;
				// let base64Image = base64String.split('/^data:image/w+;base64,/').pop();
				let base64Image = base64String.split(';base64,').pop();
				let histogram_data = base64Image.replace(/['"]+/g, '');
				// let base64Image = base64String.replace(/^data:image\/\w+;base64,/, '');

				// fs.writeFile(
				// 	'plots/histogram.png',
				// 	base64Image,
				// 	{ encoding: 'base64' },
				// 	function (err) {
				// 		if (err) {
				// 			console.log('err', err);
				// 		}
				// 		console.log('success');
				// 	}
				// );
				res.send(histogram_data);
			}
		}
	);
});

router.get('/scatter', async (req, res) => {
	await request(
		'http://127.0.0.1:5000/scatter',
		async (error, response, body) => {
			let base64String = body;
			let base64Image = base64String.split(';base64,').pop();
			let scatter_data = base64Image.replace(/['"]+/g, '');

			// fs.writeFile(
			// 	'plots/scatter.png',
			// 	base64Image,
			// 	{ encoding: 'base64' },
			// 	function (err) {
			// 		if (err) {
			// 			console.log('err', err);
			// 		}
			// 		console.log('success');
			// 	}
			// );
			res.send(scatter_data);
		}
	);
});

router.get('/category', async (req, res) => {
	console.log(req.body);
	await request(
		'http://127.0.0.1:5000/category',
		async (error, response, body) => {
			// Disable caching for content files

			let base64String = body;
			let base64Image = base64String.split(';base64,').pop();
			let categorial_data = base64Image.replace(/['"]+/g, '');

			// fs.writeFile(
			// 	'plots/category.png',
			// 	base64Image,
			// 	{ encoding: 'base64' },
			// 	function (err) {
			// 		if (err) {
			// 			console.log('err', err);
			// 		}
			// 		console.log('success');
			// 	}
			// );
			res.send(categorial_data);
		}
	);
});

router.post(
	'/predict',
	[
		check('passenger_id', 'Please enter valid Passenger ID').isInt(),
		check('pclass', 'Passenger Class is required').notEmpty(),
		check('age', 'Please enter valid age').isInt(),
		check('sibsp', 'Please enter valid sibsp').isInt(),
		check('parch', 'Please enter valid parch').isInt(),
		check('fare', 'Please enter valid fare').isFloat(),
	],
	async function (req, res) {
		const errors = validationResult(req);
		console.log(errors.mapped());
		if (!errors.isEmpty()) {
			res.send('Please field all the field');
		} else {
			console.log(req.body);
			var options = {
				method: 'POST',
				uri: 'http://127.0.0.1:5000/predict',
				body: req.body,
				json: true, // Automatically stringifies the body to JSON
			};
			var returndata;
			var sendrequest = await request(options)
				.then(function (parsedBody) {
					console.log(parsedBody); // parsedBody contains the data sent back from the Flask server
					returndata = parsedBody; // do something with this data, here I'm assigning it to a variable.
				})
				.catch(function (err) {
					console.log(err);
				});
			console.log('From Flask :- ', returndata);
			res.send(returndata);
		}
	}
);

module.exports = router;
