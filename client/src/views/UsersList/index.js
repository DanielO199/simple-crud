import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

import { UsersStore } from 'stores';
import { LoadingSpinner, Alert } from 'common/components';
import { UserItem, UserListTable, UserListHeader } from './components';

const UserList = observer(() => {
	useEffect(() => {
		UsersStore.fetchUsers();
	}, []);

	return (
		<div className='users-list'>
			<UserListHeader />
			<div className='text-center'>
				{UsersStore.loading && <LoadingSpinner />}
			</div>
			{!!UsersStore.alert && <Alert message={UsersStore.alert} />}
			{!UsersStore.loading && UsersStore.usersList && (
				<UserListTable>
					{UsersStore.usersList.map((user) => (
						<UserItem
							key={user.id}
							id={user.id}
							name={user.name}
							surname={user.surname}
							email={user.email}
							address={user.address}
							phone={user.phone}
						/>
					))}
				</UserListTable>
			)}
		</div>
	);
});

export default UserList;
