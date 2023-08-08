// import { Registration as RegistrationForm } from '../../../Components/Forms';

import { FormEvent } from 'react';
import { clearErrorMessage, thunk } from '../../../../app/auth/authReducer';
import { useAppDispatch } from '../../../../app/hooks';
import { IInputForm } from '../../../Components/Forms/types';
import {
    validateEmail,
    validateName,
    validatePassword,
    validateSimilarityPass,
} from '../../../Components/Forms/validate';

import useInput from '../../../../hooks/useInput';
import MyForm from '../../../Components/Forms/Form/Form';

const Register = () => {
    const userName = useInput('aaaa', validateName);
    const email = useInput('bbb@mail.ru', validateEmail);
    const password = useInput('qwe123!', validatePassword);
    const confirmPassword = useInput(
        'qwe123!',
        validateSimilarityPass(password.value)
    );

    const dispatch = useAppDispatch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(
            thunk.regThunk({
                email: email.value,
                password: password.value,
                userName: userName.value,
                confirmPassword: confirmPassword.value,
            })
        );
        dispatch(clearErrorMessage());
    };

    const inputsReg: IInputForm[] = [
        { ...userName, name: 'name', placeholder: 'Type name...' },
        { ...email, name: 'email', placeholder: 'Type email...' },
        {
            ...password,
            type: 'password',
            name: 'password',
            placeholder: 'Type password...',
        },
        {
            ...confirmPassword,
            type: 'password',
            name: 'retryPassword',
            placeholder: 'Retry password...',
        },
    ];

    return (
        <MyForm
            method="post"
            formAction="auth"
            linkToBtn="/auth"
            navigateTo="/auth"
            inputs={inputsReg}
            title="Registration"
            buttonText="Log in now"
            handleSubmit={handleSubmit}
            question="Have an account?"
        ></MyForm>
    );
    // return <RegistrationForm />;
};

export default Register;
