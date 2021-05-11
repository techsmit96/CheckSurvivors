import { useState } from 'react';

const useForm = (validate) => {
	const [data, setData] = useState({
		passenger_id: '',
		pclass: '',
		male: '0.0',
		female: '0.0',
		age: '',
		sibsp: '',
		parch: '',
		fare: '',
		southampton: '0.0',
		cherbourg: '0.0',
		queenstown: '0.0',
	});
	const [errors, setErrors] = useState({});
	const [passenger, setPassenger] = useState();
	const handleInputs = (e) => {
		const { name, value } = e.target;

		setData({ ...data, [name]: value });
	};
	const handleCombo = (e) => {
		const { name, value } = e.target;
		var c_value = '1.0';
		if (value === 'male') {
			setData({ ...data, [value]: c_value });
		} else if (value === 'female') {
			setData({ ...data, [value]: c_value });
		} else if (value === 'southampton') {
			setData({ ...data, [value]: c_value });
		} else if (value === 'cherbourg') {
			setData({ ...data, [value]: c_value });
		} else if (value === 'queenstown') {
			setData({ ...data, [value]: c_value });
		} else {
		}
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrors(validate(data));
		const {
			passenger_id,
			pclass,
			male,
			female,
			age,
			sibsp,
			parch,
			fare,
			southampton,
			cherbourg,
			queenstown,
		} = data;
		if (!passenger_id || !pclass || !age || !sibsp || !parch || !fare) {
			console.log('error');
		} else {
		const res = await fetch('/predict', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				passenger_id,
				pclass,
				male,
				female,
				age,
				sibsp,
				parch,
				fare,
				southampton,
				cherbourg,
				queenstown,
			}),
		});
		// const info = await res.json();
		// setSalary(JSON.stringify(info));
		const info = await res.text();
		setPassenger(info);
		}
	};
	const handleClear = (e) => {};
	return {
		handleInputs,
		data,
		handleCombo,
		handleSubmit,
		passenger,
		errors,
		handleClear,
	};
};
export default useForm;
