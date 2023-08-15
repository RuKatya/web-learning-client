import { IInputForm } from '../../../Components/Forms/types';

import {
    validateEmail,
    validatePassword,
} from '../../../Components/Forms/validate';

import useInput from '../../../../hooks/useInput';
import AuthForm from '../../../Components/Forms/AuthForm/AuthForm';
import useAsyncSubmit, {
    DispatchTypesE,
    ILoginAsyncThunk,
} from '../../../../hooks/useAsyncSubmit';

const Login = () => {
    const email = useInput('', validateEmail);
    const password = useInput('', validatePassword);
    const { handleSubmit } = useAsyncSubmit<ILoginAsyncThunk>(
        DispatchTypesE.LOGIN,
        {
            email: email.value,
            password: password.value,
        }
    );

    const inputsLogin: IInputForm[] = [
        {
            ...email,
            name: 'email',
            placeholder: 'Type email...',
        },
        {
            ...password,
            name: 'password',
            type: 'password',
            placeholder: 'Type password...',
        },
    ];

    return (
        <AuthForm
            title="Log In"
            linkToBtn="reg"
            buttonText="Sign In"
            inputs={inputsLogin}
            handleSubmit={handleSubmit}
            question="Dont't have an account"
            questionLinkText="Sign Up"
        />
    );
};

export default Login;
