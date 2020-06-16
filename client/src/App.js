import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import { AuthStore } from 'stores';
import { MainNavigation } from 'common/components';
import { routes } from 'globals/routesCombined';

const App = () => {
	useEffect(() => {
		if (localStorage.getItem('accessToken')) {
			AuthStore.token = localStorage.getItem('accessToken');
		}
	}, []);

	return (
		<div>
			<Router>
				<MainNavigation />
				<main>
					{routes.map((route, index) => {
						return (
							<Route
								key={index}
								path={route.path}
								exact={route.exact}
								name={route.name}
								component={route.component}
							/>
						);
					})}
				</main>
			</Router>
		</div>
	);
};

export default App;
