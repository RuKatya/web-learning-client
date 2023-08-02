import css from './Registration.module.scss';

import { FC, FormEvent } from 'react';
import axios, { AxiosResponse } from 'axios';
import { IAxiosRegistration } from '../types';
import useInput from '../../../../hooks/useInput';

import { Form } from 'react-router-dom';
import Input from '../../Input';
import { thunk } from '../../../../app/auth/authReducer';
import { useAppDispatch } from '../../../../app/hooks';

interface IFormProps {}

const Registration: FC<IFormProps> = props => {
    const userName = useInput('aaaa');
    const email = useInput('bbb@mail.ru');
    const password = useInput('qwe123!');
    const confirmPassword = useInput('qwe123!');
    const dispatch = useAppDispatch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(
            thunk.regThunk({
                userName: userName.value,
                email: email.value,
                password: password.value,
                confirmPassword: confirmPassword.value,
            })
        );
    };

    return (
        <Form
            className={css.regForm}
            action="/auth"
            method="post"
            onSubmit={handleSubmit}
        >
            <h3 className={css.regForm__title}>Registration</h3>
            <div>
                <Input {...userName} placeholder="Type name..." />
            </div>
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
            <div>
                <Input
                    {...confirmPassword}
                    type="password"
                    placeholder="Retry password"
                />
            </div>
            <button className={css.regForm__submit_btn} type="submit">
                Search
            </button>
        </Form>
    );
};
export default Registration;
