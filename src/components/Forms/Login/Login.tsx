import { FC, FormEvent, useEffect } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';

import Button, { EButtonPosition, EButtonSize } from 'components/Button';
import StatusMessage from 'components/Forms/StatusMessage';
import Input from 'components/Input';

import useInput from 'hooks/useInput';

import { thunk } from 'store/auth/authReducer';
import { auth } from 'store/auth/selectors';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import { IInputForm } from '../types';

import { validateEmail, validatePassword } from '../validate';
import css from './LoginForm.module.scss';

const Login: FC = () => {
  const email = useInput('qweqwe@main.ru', validateEmail);
  const password = useInput('qwe123!', validatePassword);

  const dispatch = useAppDispatch();
  const {
    message,
    continueWork,
    status,
    user: { isLogin, userRole },
  } = useAppSelector(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin && userRole === 'user') {
      navigate('/');
    }
  }, []);

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;
    if (continueWork) {
      timerId = setTimeout(() => {
        // dispatch(clearErrorMessage());
        navigate('/');
      }, 3000);
    }
    return () => clearTimeout(timerId);
    // eslint-disable-next-line
  }, [continueWork]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(thunk.loginThunk({ email: email.value, password: password.value }));
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

  const statusMessage = message ? <StatusMessage continueWork={continueWork} message={message} /> : null;

  return (
    <Form className={css.loginForm} action="/auth" method="post" onSubmit={handleSubmit}>
      <h3 className={css.loginForm__title}>Login</h3>
      {statusMessage}

      {inputsLogin.map((el) => (
        <Input key={el.name} {...el} />
      ))}

      <Button
        style={{ margin: '0 auto' }}
        type="submit"
        size={EButtonSize.MEDIUM}
        position={EButtonPosition.CENTER}
        disabled={status === 'loading'}
      >
        Log in
      </Button>
      <p className={css.question}>
        Don't have an account? <Link to="registration-user">Sign Up</Link>
      </p>
    </Form>
  );
};
export default Login;
