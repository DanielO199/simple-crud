import React from 'react';
import { NavLink } from 'react-router-dom';

import { AuthStore } from 'stores';

const NavLinks = () => {
	return (
		<ul className='nav-links'>
			<li>
				<NavLink to='/users'>USERS</NavLink>
			</li>
			<li>
				<NavLink to='/products'>PRODUCTS</NavLink>
			</li>
			<li onClick={() => AuthStore.logout()}>LOG OUT</li>
		</ul>
	);
};

export default NavLinks;
