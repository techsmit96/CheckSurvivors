import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from '../components/header/Nav';
import Category from '../components/plots/Category';
import Histogram from '../components/plots/Histogram';
import Scatter from '../components/plots/Scatter';
import User from '../components/user/User';

const Routes = () => {
	return (
		<BrowserRouter>
			<Nav />
			<Route path="/" exact>
				<User />
			</Route>
			<Route path="/hist">
				<Histogram />
			</Route>
			<Route path="/scatter">
				<Scatter />
			</Route>
			<Route path="/category">
				<Category />
			</Route>
		</BrowserRouter>
	);
};

export default Routes;
