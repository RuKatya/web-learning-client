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

const useAsyncSubmit = (
    dispatchType: DispatchTypesE,
    rest: IRegAsyncThunk | ILoginAsyncThunk
): IUseAsyncSubmitReturn => {
    const dispatch = useAppDispatch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        switch (dispatchType) {
            case DispatchTypesE.REG:
                dispatch(thunk.regThunk(rest as IRegAsyncThunk));
                break;
            case DispatchTypesE.LOGIN:
                dispatch(thunk.loginThunk(rest as ILoginAsyncThunk));
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
