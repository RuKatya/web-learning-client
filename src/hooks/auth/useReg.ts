import { IInputForm } from 'config/types';

import useInput from 'hooks/useInput';
import useSubmit, { DispatchFormEnum, RegThunkResponse } from 'hooks/useSubmit';

import { validateEmail, validateName, validatePassword, validateSimilarityPass } from 'utils/validate';

const useReg = () => {
  const userName = useInput('', validateName);
  const email = useInput('', validateEmail);
  const password = useInput('', validatePassword);
  const confirmPassword = useInput('', validateSimilarityPass(password.value));

  const { handleSubmit } = useSubmit<RegThunkResponse>(DispatchFormEnum.REG, {
    userName: userName.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  });

  const regInputs: IInputForm[] = [
    { ...userName, name: 'userName', placeholder: 'Type name...' },
    { ...email, name: 'email', placeholder: 'Type email...' },
    {
      ...password,
      type: 'password',
      name: 'password',

      placeholder: 'Type password...',
    },
    {
      ...confirmPassword,
      name: 'confirmPassword',

      type: 'password',
      placeholder: 'Confirm password...',
    },
  ];

  return { regInputs, handleSubmit };
};

export default useReg;
