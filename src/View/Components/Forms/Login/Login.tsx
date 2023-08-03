import css from './LoginForm.module.scss';

import { FC, FormEvent, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { clearErrorMessage, thunk } from '../../../../app/auth/authReducer';
import { auth, authUser } from '../../../../app/auth/selectors';

import Input from '../../Input';
import useInput from '../../../../hooks/useInput';
import { Form, Link, useNavigate } from 'react-router-dom';
import { IInputForm } from '../types';

import { validateEmail, validatePassword } from '../validate';
import Button, { EButtonPosition, EButtonSize } from '../../Button/Button';

interface IFormProps {}

const Login: FC<IFormProps> = props => {
    const email = useInput('qwe123@mail.ruww', validateEmail);
    const password = useInput('qwe123!', validatePassword);

    const dispatch = useAppDispatch();
    const { continueWork, message } = useAppSelector(auth);
    const { isLogin } = useAppSelector(authUser);

    const navigate = useNavigate();

    useEffect(() => {
        if (isLogin) {
            navigate('/');
        }
    }, []);

    useEffect(() => {
        let timerId: any;
        if (continueWork) {
            timerId = setTimeout(() => {
                navigate('/');
                dispatch(clearErrorMessage());
            }, 4000);
        }
        return () => clearTimeout(timerId);
        // eslint-disable-next-line
    }, [continueWork]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(
            thunk.loginThunk({ email: email.value, password: password.value })
        );
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
        <Form
            className={css.loginForm}
            action="/auth"
            method="post"
            onSubmit={handleSubmit}
        >
            <h3 className={css.loginForm__title}>Login</h3>
            {message && continueWork ? (
                <div className={css.success}>{message}</div>
            ) : null}
            {message && !continueWork ? (
                <div className={css.error}>{message}</div>
            ) : null}

            {inputsLogin.map(el => (
                <Input key={el.name} {...el} />
            ))}

            <Button
                style={{ margin: '0 auto' }}
                type="submit"
                size={EButtonSize.MEDIUM}
                position={EButtonPosition.CENTER}
            >
                Log in
            </Button>

            <p className={css.isReg}>
                Don't have an account? <Link to="reg">Sign Up</Link>
            </p>
        </Form>
    );
};
export default Login;
