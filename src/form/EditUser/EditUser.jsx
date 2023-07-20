import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Form from '../Form/Form';
import { FormProvider, useForm } from 'react-hook-form';

const StyledPre = styled.pre`
	width: 20vw;
	height: 30vh;
`;

const getDefaultValues = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				firstName: 'Riley',
				lastName: 'Kamstra',
				email: 'riley@openvantage.co.za',
				mobileNumber: '123-456-6789',
			});
		}, 5000);
	});
};

const EditUser = () => {
	const [formData, setFormData] = useState(null);

	const methods = useForm({
		defaultValues: async () => await getDefaultValues(),
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

export default EditUser;
