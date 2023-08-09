import { FormEvent } from 'react';
import { thunk } from '../app/auth/authReducer';
import { useAppDispatch } from '../app/hooks';

export interface IUseAsyncSubmitReturn {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export interface IUseAsyncSubmit {
    [key: string]: string;
}

export enum DispatchTypesE {
    REG = 'reg',
    LOGIN = 'login',
}

const useAsyncSubmit = (
    dispatchType: DispatchTypesE,
    rest: IUseAsyncSubmit
): IUseAsyncSubmitReturn => {
    const dispatch = useAppDispatch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        switch (dispatchType) {
            case DispatchTypesE.REG:
                dispatch(thunk.regThunk(rest));
                break;
            case DispatchTypesE.LOGIN:
                dispatch(thunk.loginThunk(rest));
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
