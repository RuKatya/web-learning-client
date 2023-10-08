import { FormEvent } from 'react';
import { thunk } from '../store/auth/authReducer';
import { useAppDispatch } from '../store/hooks';

export interface IuseSubmitReturn {
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

const useSubmit = <T>(dispatchType: DispatchFormEnum, rest: T): IuseSubmitReturn => {
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    switch (dispatchType) {
      case DispatchFormEnum.REG:
        dispatch(thunk.regThunk(rest as unknown as RegThunkResponse));
        break;
      default:
        dispatch(thunk.loginThunk(rest as unknown as LoginThunkResponse));
        break;
      // case DispatchFormEnum.LOGIN:
      // break;
    }
  };

  return {
    handleSubmit,
  };
};

export default useSubmit;
