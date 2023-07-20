/* eslint-disable react/prop-types */
import { styled } from 'styled-components';
import { useFormContext } from 'react-hook-form';
import ErrorMessage from '../../Error/ErrorMessage.component';

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

const StyledInput = styled.input`
	text-align: center;
	border: 1px solid black;
	width: 20vw;
`;

const Form = ({ submit }) => {
	const {
		formState: { errors, isLoading },
		handleSubmit,
		register,
	} = useFormContext();
	return (
		<>
			<FormContainer>
				<div>
					<StyledInput
						{...register('firstName', {
							minLength: {
								value: 4,
								message: 'Please enter a name longer than 4 character',
							},
						})}
						disabled={isLoading}
						placeholder='First Name'
					/>
					<ErrorMessage errors={errors} name='firstName' />
				</div>
				<div>
					<StyledInput
						{...register('lastName', {
							minLength: {
								value: 4,
								message: 'Please enter a surname longer than 4 character',
							},
						})}
						disabled={isLoading}
						placeholder='Last Name'
					/>
					<ErrorMessage errors={errors} name='lastName' />
				</div>
				<div>
					<StyledInput
						{...register('email', {
							required: 'Please enter a valid email',
						})}
						disabled={isLoading}
						placeholder='Email'
					/>
					<ErrorMessage errors={errors} name='email' />
				</div>
				<div>
					<StyledInput
						{...register('mobileNumber', {
							pattern: {
								value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
								message: 'Please enter a mobile number in format 123-456-7890',
							},
						})}
						disabled={isLoading}
						placeholder='Mobile Number'
					/>
					<ErrorMessage errors={errors} name='mobileNumber' />
				</div>

				<StyledButton disabled={isLoading} onClick={handleSubmit(submit)}>
					Submit
				</StyledButton>
			</FormContainer>
		</>
	);
};

export default Form;
