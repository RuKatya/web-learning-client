import css from './LoginForm.module.scss';

import { FC, FormEvent, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { thunk } from '../../../../app/auth/authReducer';
import { auth } from '../../../../app/auth/selectors';

import Input from '../../Input';
import useInput from '../../../../hooks/useInput';
import { Form, useNavigate } from 'react-router-dom';

interface IFormProps {}

const Login: FC<IFormProps> = props => {
    const email = useInput('qwe123@mail.ru');
    const password = useInput('qwe123!');

    const dispatch = useAppDispatch();
    const authData = useAppSelector(auth);

    const navigate = useNavigate();

    useEffect(() => {
        let timerId: any;
        if (authData.continueWork) {
            timerId = setTimeout(() => {
                navigate('/');
            }, 4000);
        }
        return () => clearTimeout(timerId);
        // eslint-disable-next-line
    }, [authData.continueWork]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email) {
            console.log('error');
            return;
        }

        dispatch(
            thunk.loginThunk({ email: email.value, password: password.value })
        );
    };

    return (
        <Form
            className={css.loginForm}
            action="/auth"
            method="post"
            onSubmit={handleSubmit}
        >
            <h3 className={css.loginForm__title}>Login</h3>
            <div>
                <Input {...email} placeholder="Type email..." />
            </div>
            <div>
                <Input
                    {...password}
                    placeholder="Type password..."
                    type="password"
                />
            </div>
            <button type="submit">Search</button>
            {authData.message ? <div>{authData.message}</div> : null}
        </Form>
    );
};
export default Login;
