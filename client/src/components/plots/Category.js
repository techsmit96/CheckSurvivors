import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
const Category = () => {
	const [category, setCategory] = useState('');

	const getCat = async () => {
		const res = await fetch('/category');
		const info = await res.text();
		setCategory(info);
	};

	useEffect(() => {
		getCat();
	}, []);
	return (
		<div>
			<h1>Categorial Data</h1>
			{category ? (
				<img
					width="100%"
					src={'data:image/png;base64,' + category}
					alt="categorial data"
				/>
			) : (
				// <Spinner />
				<Spinner animation="border" />
			)}
		</div>
	);
};

export default Category;
