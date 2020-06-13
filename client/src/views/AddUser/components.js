import React from 'react';
import { observer } from 'mobx-react';

import { UsersStore } from 'stores';
import { useForm } from 'utils/useForm';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from 'utils/validators';
import { Input, Button } from 'common/components';

const AddUserForm = observer(() => {
	const [formState, inputHandler] = useForm(
		{
			email: { value: '', isValid: false },
			name: { value: '', isValid: false },
			surname: { value: '', isValid: false },
			phone: { value: '', isValid: false },
			address: { value: '', isValid: false }
		},
		false
	);

	return (
		<div className='add-user-form'>
			<Input
				id='email'
				element='input'
				type='text'
				label='Email'
				validators={[VALIDATOR_REQUIRE()]}
				errorText='Field cant be empty'
				onInput={inputHandler}
				valid={true}
			/>
			<Input
				id='name'
				element='input'
				type='text'
				label='Name'
				validators={[VALIDATOR_REQUIRE()]}
				errorText='Field cant be empty'
				onInput={inputHandler}
				valid={true}
			/>
			<Input
				id='surname'
				element='input'
				type='text'
				label='Surname'
				validators={[VALIDATOR_REQUIRE()]}
				errorText='Field cant be empty'
				onInput={inputHandler}
				valid={true}
			/>
			<Input
				id='phone'
				element='input'
				type='text'
				label='Phone'
				validators={[VALIDATOR_MINLENGTH(6)]}
				errorText='At lesat 6 characters'
				onInput={inputHandler}
				valid={true}
			/>
			<Input
				id='address'
				element='input'
				type='text'
				label='Address'
				validators={[VALIDATOR_REQUIRE()]}
				errorText='Field cant be empty'
				onInput={inputHandler}
				valid={true}
			/>
			<Button
				inverse
				fullWidth
				disabled={!formState.isValid}
				onClick={() => {
					UsersStore.addUser({
						email: formState.inputs.email.value,
						name: formState.inputs.name.value,
						surname: formState.inputs.surname.value,
						phone: formState.inputs.phone.value,
						address: formState.inputs.address.value
					});
				}}>
				Add
			</Button>
		</div>
	);
});

export { AddUserForm };
