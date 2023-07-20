import { useState } from 'react';
import { styled } from 'styled-components';
import Form from '../Form/Form';
import { FormProvider, useForm } from 'react-hook-form';

const StyledPre = styled.pre`
	width: 20vw;
	height: 30vh;
`;

const CreateUser = () => {
	const [formData, setFormData] = useState(null);

	const methods = useForm({
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			mobileNumber: '',
		},
	});

	const submit = (data) => {
		setFormData(data);
	};

	return (
		<>
			<FormProvider {...methods}>
				<Form submit={submit} />
			</FormProvider>
			{formData && <StyledPre>{JSON.stringify(formData, null, 2)}</StyledPre>}
		</>
	);
};

export default CreateUser;
