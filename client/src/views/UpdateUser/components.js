import React from 'react';
import { observer } from 'mobx-react';

import { UsersStore } from 'stores';
import { useForm } from 'utils/useForm';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from 'utils/validators';
import { Input, Button } from 'common/components';

const UpdateUserForm = observer(({ id }) => {
	const [formState, inputHandler] = useForm(
		{
			name: { value: '', isValid: true },
			surname: { value: '', isValid: true },
			phone: { value: '', isValid: true },
			address: { value: '', isValid: true }
		},
		false
	);

	return (
		<div className='update-user-form'>
			<Input
				id='name'
				element='input'
				type='text'
				label='Name'
				validators={[VALIDATOR_REQUIRE()]}
				errorText='Field incorrect'
				onInput={inputHandler}
				value={UsersStore.user.name}
				valid={true}
			/>
			<Input
				id='surname'
				element='input'
				type='text'
				label='Surname'
				validators={[VALIDATOR_REQUIRE()]}
				errorText='Field incorrect'
				onInput={inputHandler}
				value={UsersStore.user.surname}
				valid={true}
			/>
			<Input
				id='phone'
				element='input'
				type='text'
				label='Phone'
				validators={[VALIDATOR_MINLENGTH(6)]}
				errorText='At least 6 characters'
				onInput={inputHandler}
				value={UsersStore.user.phone}
				valid={true}
			/>
			<Input
				id='address'
				element='input'
				type='text'
				label='Address'
				validators={[VALIDATOR_REQUIRE()]}
				errorText='Field incorrect'
				onInput={inputHandler}
				value={UsersStore.user.address}
				valid={true}
			/>
			<Button
				inverse
				fullWidth
				disabled={!formState.isValid}
				onClick={() => {
					UsersStore.updateUser({
						id,
						name: formState.inputs.name.value,
						surname: formState.inputs.surname.value,
						phone: formState.inputs.phone.value,
						address: formState.inputs.address.value
					});
				}}>
				Update
			</Button>
		</div>
	);
});

export { UpdateUserForm };
