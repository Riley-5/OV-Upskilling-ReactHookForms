import { string, object } from 'prop-types';
import { ErrorMessageWrapper } from './Errors.style';

const getError = (errors, name) => {
	const explodedString = name.split('.');
	let obj = errors;
	for (let i = 0, l = explodedString.length; i < l; i += 1) {
		if (!obj) {
			break;
		}
		obj = obj[explodedString[i]];
	}
	return obj;
};

const ErrorMessage = ({ errors, name }) => {
	const { message } = getError(errors, name) ?? {};
	if (!message) {
		return null;
	}
	return (
		<div style={{ alignSelf: 'flex-start' }}>
			<ErrorMessageWrapper>
				<span>{`* ${message}`}</span>
			</ErrorMessageWrapper>
		</div>
	);
};

ErrorMessage.propTypes = {
	errors: object.isRequired,
	name: string.isRequired,
};

export default ErrorMessage;
