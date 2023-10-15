import { FormEvent } from 'react';
import { thunk } from '../store/auth/authReducer';
import { useAppDispatch } from '../store/hooks';

export type UseSubmitReturn = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};
export type LoginThunkResponse = {
  email: string;
  password: string;
};
export interface RegThunkResponse extends LoginThunkResponse {
  userName: string;
  confirmPassword: string;
}

export enum DispatchFormEnum {
  SAVE = 'save-user',
  LOGIN = 'login-user',
}

const useSubmit = <T>(dispatchType: DispatchFormEnum, rest: T): UseSubmitReturn => {
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    switch (dispatchType) {
      case DispatchFormEnum.SAVE:
        dispatch(thunk.regThunk(rest as unknown as RegThunkResponse));
        break;
      default:
        dispatch(thunk.loginThunk(rest as unknown as LoginThunkResponse));
        break;
    }
  };

  return {
    handleSubmit,
  };
};

export default useSubmit;
