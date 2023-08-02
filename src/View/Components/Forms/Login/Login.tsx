import css from './LoginForm.module.scss';

import axios from 'axios';
import { FC, FormEvent } from 'react';
import { Form } from 'react-router-dom';
import useInput from '../../../../hooks/useInput';
import Input from '../../Input';

interface IFormProps {}

const Login: FC<IFormProps> = props => {
    const email = useInput('');
    const password = useInput('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email) {
            console.log('error');
            return;
        }

        console.log('submit login');

        axios
            .post('http://localhost:8080/auth/login-user', {
                email: email.value,
                password: password.value,
            })
            .then(data => console.log(data))
            .catch(e => console.log(e));
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
                <Input {...email} placeholder="Type name..." />
            </div>
            <div>
                <Input
                    {...password}
                    placeholder="Type password..."
                    type="password"
                />
            </div>
            <button type="submit">Search</button>
        </Form>
    );
};
export default Login;
