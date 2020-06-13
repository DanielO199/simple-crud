import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';

import { UsersStore } from 'stores';
import { LoadingSpinner, Alert } from 'common/components';
import { UpdateUserForm } from './components';

const UpdateUser = observer(() => {
	const userId = useParams().userId;

	useEffect(() => {
		UsersStore.fetchUser(userId);
	}, [userId]);

	return (
		<>
			{UsersStore.loading && (
				<div className='text-center'>
					<LoadingSpinner />
				</div>
			)}
			{!!UsersStore.alert && <Alert message={UsersStore.alert} />}
			{!UsersStore.loading && UsersStore.usersList && (
				<UpdateUserForm id={userId} />
			)}
		</>
	);
});

export default UpdateUser;
