import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
	return (
		<>
			<nav className="navbar fixed-top  navbar-expand-lg navbar-dark bg-dark">
				<NavLink className="navbar-brand " to="#">
					Titanic Survival Data
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<NavLink className="nav-link" to="/">
								Home <span className="sr-only">(current)</span>
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/hist">
								Histogram
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/scatter">
								Scatter
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/category">
								Category
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Nav;
