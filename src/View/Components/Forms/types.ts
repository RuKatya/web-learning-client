import { ChangeEvent, FocusEvent, InputHTMLAttributes } from 'react';

export interface IAxiosRegistration {
    message: string;
    continueWork: boolean;
}

export interface IAxiosLogout {
    isLogin: boolean;
    continueWork: boolean;
}

export interface IAxiosLogin extends IAxiosRegistration {
    userName: string;
    userRole: string;
    isLogin: boolean;
}

export interface IInputForm extends InputHTMLAttributes<HTMLInputElement> {
    value: string;
    error: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleFocus: (e: FocusEvent<HTMLInputElement>) => void;
}
