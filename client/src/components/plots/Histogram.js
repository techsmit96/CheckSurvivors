import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
const Histogram = () => {
	const [histoGram, setHistoGram] = useState('');

	const getHist = async () => {
		const res = await fetch('/hist');
		const info = await res.text();
		setHistoGram(info);
	};

	useEffect(() => {
		getHist();
	}, []);

	return (
		<div>
			<h1>Histograms</h1>
			{/* <canvas ref="canvas" width={640} height={425} /> */}
			{histoGram ? (
				<img
					width="100%"
					src={'data:image/png;base64,' + histoGram}
					alt="Histogram"
				/>
			) : (
				<Spinner animation="border" />
			)}
		</div>
	);
};

export default Histogram;
