import React from 'react';
import ReactDOM from 'react-dom';

const SideDrawer = ({ children }) => {
	return ReactDOM.createPortal(
		<aside className='side-drawer'>{children}</aside>,
		document.getElementById('drawer-hook')
	);
};

export default SideDrawer;
