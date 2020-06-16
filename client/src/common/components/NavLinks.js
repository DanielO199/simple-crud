import React from 'react';
import { observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';

import { AuthStore } from 'stores';

const NavLinks = observer(() => {
	return (
		<ul className='nav-links'>
			{!!AuthStore.token ? (
				<>
					<li>
						<NavLink to='/users'>USERS</NavLink>
					</li>
					<li>
						<NavLink to='/products'>PRODUCTS</NavLink>
					</li>
					<li onClick={() => AuthStore.logout()}>LOG OUT</li>
				</>
			) : (
				<li onClick={() => AuthStore.login()}>LOGIN</li>
			)}
		</ul>
	);
});

export default NavLinks;
