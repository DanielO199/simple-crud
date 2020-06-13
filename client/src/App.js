import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import { MainNavigation } from 'common/components';
import { routes } from 'globals/routesCombined';

const App = () => {
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
