import { FormProvider, useForm } from 'react-hook-form';
import StyledForm from './Form.styled';
import Input from '../../form/Input/Input';
import ErrorMessage from '../../Error/ErrorMessage.component';
import { styled } from 'styled-components';
import { useEffect, useState } from 'react';

const Button = styled.button`
	width: 10vw;
	color: black;
`;

const Form = () => {
	const [formData, setFormData] = useState({});
	const { handleSubmit, formState, reset, ...methods } = useForm({
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			mobileNumber: '',
		},
	});

	const onSubmit = (data) => {
		setFormData(data);
	};

	useEffect(() => {
		if (formState.isSubmitSuccessful) {
			reset({ firstName: '', lastName: '', email: '', mobileNumber: '' });
		}
	}, [formState, formData, reset]);

	console.log(formData);

	return (
		<FormProvider {...methods}>
			<StyledForm>
				<Input
					name='firstName'
					placeholder='First Name'
					validation={{
						minLength: {
							value: 4,
							message: 'Please enter a name longer than 4 character',
						},
					}}
				/>
				<ErrorMessage errors={formState.errors} name='firstName' />

				<Input
					name='lastName'
					placeholder='Last Name'
					validation={{
						minLength: {
							value: 4,
							message: 'Please enter a surname longer than 4 character',
						},
					}}
				/>
				<ErrorMessage errors={formState.errors} name='lastName' />

				<Input
					name='email'
					placeholder='Email'
					validation={{
						required: 'Please enter a valid email',
					}}
				/>
				<ErrorMessage errors={formState.errors} name='email' />

				<Input
					name='mobileNumber'
					placeholder='Mobile Number'
					validation={{
						pattern: {
							value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
							message: 'Please enter a mobile number in format 123-456-7890',
						},
					}}
				/>
				<ErrorMessage errors={formState.errors} name='mobileNumber' />

				<Button onClick={handleSubmit(onSubmit)}>Submit</Button>
			</StyledForm>
		</FormProvider>
	);
};

export default Form;
