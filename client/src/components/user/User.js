import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import useForm from './UseForm';
import styles from './User.module.css';
import validate from './ValidateInfo';
const User = () => {
	const {
		handleInputs,
		data,
		handleCombo,
		handleSubmit,
		passenger,
		errors,
		handleClear,
	} = useForm(validate);

	return (
		<div className={styles.login} style={{}}>
			<h1>Passenger survival Info</h1>

			<Form method="POST">
				<Form.Row>
					<Form.Group as={Col} md="6" sm="6" controlId="formGridPassengerID">
						<Form.Label>Passenger ID</Form.Label>
						<Form.Control
							type="text"
							name="passenger_id"
							value={data.passenger_id}
							onChange={handleInputs}
							pattern="^-?[0-9]\d*\.?\d*$"
							placeholder="Passenger ID"
						/>
						{errors.passenger_id && <p>{errors.passenger_id}</p>}
					</Form.Group>

					<Form.Group as={Col} md="6" sm="6" controlId="formGridPassengerClass">
						<Form.Label>Passenger Class</Form.Label>
						<Form.Control
							as="select"
							name="pclass"
							value={data.pclass}
							onChange={handleInputs}
						>
							<option></option>
							<option value="1">1:- UpperClass</option>
							<option value="2">2:- MiddleClass</option>
							<option value="3">3:- ThirdClass</option>
						</Form.Control>
						{errors.pclass && <p>{errors.pclass}</p>}
					</Form.Group>
				</Form.Row>

				<Form.Row>
					<Form.Group as={Col} md="3" sm="4" xs="6" controlId="formGridSex">
						<Form.Label>Sex</Form.Label>
						<Form.Control
							as="select"
							name="sex"
							value={data.sex}
							onChange={handleCombo}
							required
						>
							<option></option>
							<option value="male">Male</option>
							<option value="female">Female</option>
						</Form.Control>
						{errors.sex && <p>{errors.sex}</p>}
					</Form.Group>

					<Form.Group as={Col} md="3" sm="2" xs="6" controlId="formGridAge">
						<Form.Label>Age</Form.Label>
						<Form.Control
							type="text"
							name="age"
							value={data.age}
							onChange={handleInputs}
							placeholder="Age"
						/>
						{errors.age && <p>{errors.age}</p>}
					</Form.Group>

					<Form.Group as={Col} md="3" sm="3" xs="6" controlId="formGridSibsp">
						<Form.Label>Sibsp</Form.Label>
						<Form.Control
							type="text"
							name="sibsp"
							value={data.sibsp}
							onChange={handleInputs}
							placeholder="Sibsp"
							required
						/>
						{errors.sibsp && <p>{errors.sibsp}</p>}
					</Form.Group>

					<Form.Group as={Col} md="3" sm="3" xs="6" controlId="formGridParch">
						<Form.Label>Parch</Form.Label>
						<Form.Control
							type="text"
							name="parch"
							value={data.parch}
							onChange={handleInputs}
							placeholder="Parch"
							required
						/>
						{errors.parch && <p>{errors.parch}</p>}
					</Form.Group>

					<Form.Group as={Col} sm="6" controlId="formGridFare">
						<Form.Label>Fare</Form.Label>
						<Form.Control
							type="text"
							name="fare"
							value={data.fare}
							onChange={handleInputs}
							placeholder="Fare"
							required
						/>
						{errors.fare && <p>{errors.fare}</p>}
					</Form.Group>

					<Form.Group as={Col} sm="6" controlId="formGridEmbarked">
						<Form.Label>Embarked</Form.Label>
						<Form.Control
							as="select"
							name="embarked"
							value={data.embarked}
							onChange={handleCombo}
						>
							<option></option>
							<option value="southampton">S:- Southampton</option>
							<option value="cherbourg">C:- Cherbourg</option>
							<option value="queenstown">Q:- Queenstown</option>
						</Form.Control>
						{errors.embarked && <p>{errors.embarked}</p>}
					</Form.Group>
				</Form.Row>

				<Button variant="primary" type="submit" onClick={handleSubmit}>
					Submit
				</Button>
				<Button
					className="ml-2"
					variant="primary"
					type="reset"
					onClick={handleClear}
				>
					Clear
				</Button>
			</Form>
			<h1>{passenger}</h1>
		</div>
	);
};

export default User;
