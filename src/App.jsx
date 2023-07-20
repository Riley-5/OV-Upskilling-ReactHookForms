import { useState } from 'react';
import styled from 'styled-components';
import Form from './form/Form/Form';
import CreateUser from './form/CreateUser/CreateUser';
import EditUser from './form/EditUser/EditUser';

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2vh;
`;

const StyledButton = styled.button`
	border: solid 1px black;
	width: 30vw;
`;

const App = () => {
	const [showCreateForm, setShowCreateForm] = useState(false);
	const [showEditForm, setShowEditForm] = useState(false);

	return (
		<>
			{!showCreateForm && !showEditForm && (
				<ButtonContainer>
					<StyledButton onClick={() => setShowCreateForm(true)}>
						CREATE USER
					</StyledButton>
					<StyledButton onClick={() => setShowEditForm(true)}>
						EDIT USER
					</StyledButton>
				</ButtonContainer>
			)}

			{showCreateForm && <CreateUser />}

			{showEditForm && <EditUser />}
		</>
	);
};

export default App;
