import { IInputForm } from '../../../Components/Forms/types';
import {
    validateEmail,
    validateName,
    validatePassword,
    validateSimilarityPass,
} from '../../../Components/Forms/validate';

import useInput from '../../../../hooks/useInput';
import AuthForm from '../../../Components/Forms/AuthForm';
import useAsyncSubmit, {
    DispatchTypesE,
} from '../../../../hooks/useAsyncSubmit';

const Register = () => {
    const userName = useInput('aaaa', validateName);
    const email = useInput('bbb@mail.ru', validateEmail);
    const password = useInput('qwe123!', validatePassword);
    const confirmPassword = useInput(
        'qwe123!',
        validateSimilarityPass(password.value)
    );
    const { handleSubmit } = useAsyncSubmit(DispatchTypesE.REG, {
        userName: userName.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
    });

    const inputsReg: IInputForm[] = [
        { ...userName, name: 'userName', placeholder: 'Type name...' },
        { ...email, name: 'email', placeholder: 'Type email...' },
        {
            ...password,
            type: 'password',
            name: 'password',

            placeholder: 'Type password...',
        },
        {
            ...confirmPassword,
            name: 'confirmPassword',

            type: 'password',
            placeholder: 'Confirm password...',
        },
    ];

    return (
        <AuthForm
            formAction="auth"
            linkToBtn="/auth"
            inputs={inputsReg}
            title="Registration"
            buttonText="Sign Up"
            handleSubmit={handleSubmit}
            question="Have an account?"
            questionLinkText="Login now"
        />
    );
};

export default Register;
