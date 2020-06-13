import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { MainHeader, NavLinks, SideDrawer, BackDrop } from 'common/components';

const MainNavigation = () => {
	const [drawerIsOpen, setDrawerIsOpen] = useState(false);

	const openDrawer = () => {
		setDrawerIsOpen(true);
	};
	const closeDrawer = () => {
		setDrawerIsOpen(false);
	};
	return (
		<>
			{drawerIsOpen && <BackDrop onClick={closeDrawer} />}
			{drawerIsOpen && (
				<SideDrawer>
					<nav className='main-navigation__drawer-nav'>
						<NavLinks />
					</nav>
				</SideDrawer>
			)}
			<MainHeader>
				<button className='main-navigation__menu-btn' onClick={openDrawer}>
					<span />
					<span />
					<span />
				</button>
				<h1 className='main-navigation__title'>
					<Link to={`/users`}>Dashboard</Link>
				</h1>
				<nav className='main-navigation__header-nav'>
					<NavLinks />
				</nav>
			</MainHeader>
		</>
	);
};

export default MainNavigation;
