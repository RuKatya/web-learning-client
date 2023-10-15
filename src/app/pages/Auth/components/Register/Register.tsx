import AuthForm from 'components/Forms/AuthForm';

import useReg from 'hooks/auth/useReg';

const Register = () => {
  const { regInputs, handleSubmit } = useReg();

  return (
    <AuthForm
      linkToBtn="/auth"
      inputs={regInputs}
      title="Registration"
      buttonText="Sign Up"
      handleSubmit={handleSubmit}
      question="Have an account?"
      questionLinkText="Login now"
    />
  );
};

export default Register;
