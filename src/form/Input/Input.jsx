/* eslint-disable react/prop-types */
import { useFormContext } from 'react-hook-form';
import { styled } from 'styled-components';

const StyledInput = styled.input`
	text-align: center;
	border: 1px solid black;
	width: 20vw;
`;

const Input = ({ name, placeholder, validation }) => {
	const { register } = useFormContext();

	return (
		<StyledInput
			{...register(name, {
				...validation,
			})}
			placeholder={placeholder}
		/>
	);
};

export default Input;
