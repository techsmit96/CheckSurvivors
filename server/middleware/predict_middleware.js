
	module.exports = function predictValidation (req, res, next) {
		console.log(req.body);
		console.log('Prediction middleware');
		next();
	};
