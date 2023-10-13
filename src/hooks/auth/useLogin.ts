import { IInputForm } from 'config/types';

import useInput from 'hooks/useInput';
import useSubmit, { DispatchFormEnum, LoginThunkResponse } from 'hooks/useSubmit';
import { validateEmail, validatePassword } from 'utils/validate';

const useLogin = () => {
  const email = useInput('qweqwe@main.ru', validateEmail);
  const password = useInput('qwe123!', validatePassword);

  const { handleSubmit } = useSubmit<LoginThunkResponse>(DispatchFormEnum.LOGIN, {
    email: email.value,
    password: password.value,
  });

  const loginInputs: IInputForm[] = [
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

  return { loginInputs, handleSubmit };
};

export default useLogin;
