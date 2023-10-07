import { FormEvent } from 'react';
import { thunk } from '../store/auth/authReducer';
import { useAppDispatch } from '../store/hooks';

export interface IUseAsyncSubmitReturn {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}
export interface LoginThunkResponse {
  email: string;
  password: string;
}
export interface RegThunkResponse extends LoginThunkResponse {
  userName: string;
  confirmPassword: string;
}

export enum DispatchFormEnum {
  REG = 'registration-user',
  LOGIN = 'login',
}

const useAsyncSubmit = <T>(dispatchType: DispatchFormEnum, rest: T): IUseAsyncSubmitReturn => {
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    switch (dispatchType) {
      case DispatchFormEnum.REG:
        dispatch(thunk.regThunk(rest as unknown as RegThunkResponse));
        break;
      case DispatchFormEnum.LOGIN:
        dispatch(thunk.loginThunk(rest as unknown as LoginThunkResponse));
        break;
      default:
        break;
    }
  };

  return {
    handleSubmit,
  };
};

export default useAsyncSubmit;
