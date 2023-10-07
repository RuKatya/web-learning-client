import AuthForm from 'components/Forms/AuthForm/AuthForm';
import { IInputForm } from 'components/Forms/types';

import { validateEmail, validatePassword } from 'components/Forms/validate';

import useAsyncSubmit, { DispatchFormEnum, LoginThunkResponse } from 'hooks/useAsyncSubmit';
import useInput from 'hooks/useInput';

const Login = () => {
  const email = useInput('qweqwe@main.ru', validateEmail);
  const password = useInput('qwe123!', validatePassword);
  const { handleSubmit } = useAsyncSubmit<LoginThunkResponse>(DispatchFormEnum.LOGIN, {
    email: email.value,
    password: password.value,
  });

  const inputsLogin: IInputForm[] = [
    {
      ...email,
      name: 'email',
      placeholder: 'Type email...',
    },
    {
      ...password,
      name: 'password',
      type: 'password',
      placeholder: 'Type password...',
    },
  ];

  return (
    <AuthForm
      title="Log In"
      linkToBtn="registration-user"
      buttonText="Sign In"
      inputs={inputsLogin}
      handleSubmit={handleSubmit}
      question="Dont't have an account"
      questionLinkText="Sign Up"
    />
  );
};

export default Login;
