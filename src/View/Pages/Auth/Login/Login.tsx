// import { Login as LoginForm } from '../../../Components/Forms';

import { FormEvent } from 'react';
import { IInputForm } from '../../../Components/Forms/types';
import { clearErrorMessage, thunk } from '../../../../app/auth/authReducer';
import { useAppDispatch } from '../../../../app/hooks';

import {
    validateEmail,
    validatePassword,
} from '../../../Components/Forms/validate';

import useInput from '../../../../hooks/useInput';
import MyForm from '../../../Components/Forms/Form/Form';

const Login = () => {
    const email = useInput('qwe123@mail.ruww', validateEmail);
    const password = useInput('qwe123!', validatePassword);
    const dispatch = useAppDispatch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(
            thunk.loginThunk({ email: email.value, password: password.value })
        );
        dispatch(clearErrorMessage());
    };

    const inputsLogin: IInputForm[] = [
        {
            ...email,
            name: 'email',
            placeholder: 'Type email...',
        },
        {
            ...password,
            type: 'password',
            name: 'password',
            placeholder: 'Type password...',
        },
    ];

    return (
        <MyForm
            method="post"
            title="Log In"
            navigateTo="/"
            linkToBtn="reg"
            formAction="auth"
            buttonText="Sign Up"
            inputs={inputsLogin}
            handleSubmit={handleSubmit}
            question="Dont't have an account"
        />
    );
    // return <LoginForm />;
};

export default Login;
