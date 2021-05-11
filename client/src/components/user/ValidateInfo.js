export default function ValidateInfo(values) {
	let errors = {};
	var pattern = new RegExp(/^[0-9\b]+$/);

	// Passenger ID validation
	if (!values.passenger_id) {
		errors.passenger_id = 'Passenger ID is required';
	}
	if (values.passenger_id !== '') {
		if (!pattern.test(values.passenger_id)) {
			errors.passenger_id = 'Passenger ID is invalid';
		}
	}

	// Passenger pclass validation
	if (!values.pclass) {
		errors.pclass = 'Passenger Class is required';
	}
	// if (!values.sex) {
	// 	errors.sex = 'Passenger sex is required';
	// }

	// Passenger field validation
	if (!values.age) {
		errors.age = 'Passenger age is required';
	}
	if (values.passenger_id !== '') {
		if (!pattern.test(values.age)) {
			errors.age = 'Passenger Age is invalid';
		}
	}
	// Passenger field validation
	if (!values.sibsp) {
		errors.sibsp = 'Passenger sibsp is required';
	}
	if (values.passenger_id !== '') {
		if (!pattern.test(values.sibsp)) {
			errors.sibsp = 'Passenger sibsp is invalid';
		}
	}
	// Passenger field validation
	if (!values.parch) {
		errors.parch = 'Passenger parch is required';
	}
	if (values.passenger_id !== '') {
		if (!pattern.test(values.parch)) {
			errors.parch = 'Passenger parch is invalid';
		}
	}
	// Passenger field validation
	if (!values.fare) {
		errors.fare = 'Passenger fare is required';
	}
	// if (!values.embarked) {
	// 	errors.embarked = 'Passenger embarked is required';
	// }
	return errors;
}
