import { FormProvider, useForm } from 'react-hook-form';
import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import ErrorMessage from '../../Error/ErrorMessage.component';
import Input from '../Input/Input';

const FormContainer = styled.div`
	display: flex;
	flex-align: center;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 5px;
`;

const StyledButton = styled.button`
	width: 10vw;
	color: black;
`;

const StyledPre = styled.pre`
	width: 20vw;
	height: 30vh;
`;

const Form = () => {
	const [formData, setFormData] = useState(null);
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

	return (
		<>
			<FormProvider {...methods}>
				<FormContainer>
					<div>
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
					</div>

					<div>
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
					</div>

					<div>
						<Input
							name='email'
							placeholder='Email'
							validation={{
								required: 'Please enter a valid email',
							}}
						/>
						<ErrorMessage errors={formState.errors} name='email' />
					</div>

					<div>
						<Input
							name='mobileNumber'
							placeholder='Mobile Number'
							validation={{
								pattern: {
									value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
									message:
										'Please enter a mobile number in format 123-456-7890',
								},
							}}
						/>
						<ErrorMessage errors={formState.errors} name='mobileNumber' />
					</div>
					<StyledButton onClick={handleSubmit(onSubmit)}>Submit</StyledButton>
					{formData && (
						<StyledPre>{JSON.stringify(formData, null, 2)}</StyledPre>
					)}
				</FormContainer>
			</FormProvider>
		</>
	);
};

export default Form;
