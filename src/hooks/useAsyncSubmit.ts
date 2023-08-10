import { FormEvent } from 'react';
import { thunk } from '../app/auth/authReducer';
import { useAppDispatch } from '../app/hooks';

export interface IUseAsyncSubmitReturn {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}
export interface ILoginAsyncThunk {
    email: string;
    password: string;
}
export interface IRegAsyncThunk extends ILoginAsyncThunk {
    userName: string;
    confirmPassword: string;
}

export enum DispatchTypesE {
    REG = 'reg',
    LOGIN = 'login',
}

const useAsyncSubmit = <T>(
    dispatchType: DispatchTypesE,
    rest: T
): IUseAsyncSubmitReturn => {
    const dispatch = useAppDispatch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        switch (dispatchType) {
            case DispatchTypesE.REG:
                dispatch(thunk.regThunk(rest as unknown as IRegAsyncThunk));
                break;
            case DispatchTypesE.LOGIN:
                dispatch(thunk.loginThunk(rest as unknown as ILoginAsyncThunk));
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
