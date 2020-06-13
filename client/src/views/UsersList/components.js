import React from 'react';
import { Link } from 'react-router-dom';

import { UsersStore } from 'stores';
import { Button } from 'common/components';

const UserItem = ({ id, name, surname, address, email, phone }) => {
	return (
		<tr>
			<td>{name}</td>
			<td>{surname}</td>
			<td>{address}</td>
			<td>{email}</td>
			<td>{phone}</td>
			<td>
				<Link to={`/user/${id}`}>
					<Button inverse>Edit</Button>
				</Link>
				<Button onClick={() => UsersStore.deleteUser(id)}>Delete</Button>
			</td>
		</tr>
	);
};

const UserListHeader = () => {
	return (
		<div className='user-list__header'>
			<h1>Users</h1>
			<Link to='/new/user'>
				<Button inverse>Add</Button>
			</Link>
		</div>
	);
};

const UserListTable = ({ children }) => {
	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Surname</th>
					<th>Address</th>
					<th>Email</th>
					<th>Phone</th>
					<th>Actions</th>
				</tr>
				{children}
			</thead>
		</table>
	);
};

export { UserItem, UserListTable, UserListHeader };
