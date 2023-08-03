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

interface IFormProps {}

const Registration: FC<IFormProps> = props => {
    const userName = useInput('aaaa');
    const email = useInput('bbb@mail.ru');
    const password = useInput('qwe123!');
    const confirmPassword = useInput('qwe123!');

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

    return (
        <Form
            className={css.regForm}
            action="/auth"
            method="post"
            onSubmit={handleSubmit}
        >
            <h3 className={css.regForm__title}>Registration</h3>

            {message && continueWork ? (
                <div className={css.success}>{message}</div>
            ) : null}
            {message && !continueWork ? (
                <div className={css.error}>{message}</div>
            ) : null}

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

            <p>
                Have an account? <Link to="/auth">Log in now</Link>
            </p>
        </Form>
    );
};
export default Registration;
