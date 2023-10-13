import AuthForm from 'components/Forms/AuthForm/AuthForm';

import { ROUTES } from 'config/routes';

import useLogin from 'hooks/auth/useLogin';

const Login = () => {
  const { loginInputs, handleSubmit } = useLogin();

  return (
    <AuthForm
      title="Log In"
      linkToBtn={ROUTES.auth.saveUser.mask}
      buttonText="Sign In"
      inputs={loginInputs}
      handleSubmit={handleSubmit}
      question="Dont't have an account"
      questionLinkText="Sign Up"
    />
  );
};

export default Login;
