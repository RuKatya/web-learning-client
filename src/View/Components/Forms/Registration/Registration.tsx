import css from './Registration.module.scss';

import { FC, FormEvent } from 'react';
import useInput from '../../../../hooks/useInput';

import { Form, Link } from 'react-router-dom';
import Input from '../../Input';
import { thunk } from '../../../../app/auth/authReducer';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { auth } from '../../../../app/auth/selectors';
import { IInputForm } from '../types';
import Button from '../../Button';
import { EButtonSize, EButtonPosition } from '../../Button/Button';
import StatusMessage from '../StatusMessage/StatusMessage';
import { validateEmail, validateName, validatePassword, validateSimilarityPass } from '../validate';

interface IFormProps {}

const Registration: FC<IFormProps> = props => {
    const userName = useInput('aaaa', validateName);
    const email = useInput('bbb@mail.ru', validateEmail);
    const password = useInput('qwe123!', validatePassword);
    const confirmPassword = useInput('qwe123!',validateSimilarityPass(password.value));

    const dispatch = useAppDispatch();
    const { message, continueWork } = useAppSelector(auth);

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

    const statusMessage = message ? (
        <StatusMessage continueWork={continueWork} message={message} />
    ) : null;

    return (
        <Form
            className={css.regForm}
            action="/auth/reg"
            method="post"
            onSubmit={handleSubmit}
        >
            <h3 className={css.regForm__title}>Registration</h3>
            {statusMessage}
            {inputsReg.map(el => (
                <Input key={el.name} {...el} />
            ))}
            <Button
                type="submit"
                size={EButtonSize.MEDIUM}
                position={EButtonPosition.CENTER}
            >
                Sign up
            </Button>
            <p className={css.question}>
                Have an account? <Link to="/auth">Log in now</Link>
            </p>
        </Form>
    );
};
export default Registration;
