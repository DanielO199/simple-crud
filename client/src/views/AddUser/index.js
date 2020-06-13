import React from 'react';
import { observer } from 'mobx-react';

import { UsersStore } from 'stores';
import { Alert } from 'common/components';
import { AddUserForm } from './components';

const AddUser = observer(() => {
	return (
		<>
			{!!UsersStore.alert && <Alert message={UsersStore.alert} />}
			<AddUserForm />
		</>
	);
});

export default AddUser;
