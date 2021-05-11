import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
const Scatter = () => {
	const [scatter, setScatter] = useState('');

	const getData = async () => {
		const res = await fetch('/scatter');
		const info = await res.text();
		setScatter(info);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			<h1>Scatter</h1>
			{scatter ? (
				<img
					width="100%"
					src={'data:image/png;base64,' + scatter}
					alt="Scatter Plot"
				/>
			) : (
				<Spinner animation="border" />
			)}
		</div>
	);
};

export default Scatter;
