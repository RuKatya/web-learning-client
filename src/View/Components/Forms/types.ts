import { ChangeEvent, FocusEvent, InputHTMLAttributes, ReactNode } from 'react';

export interface IAxiosRegistration {
    messsage: string;
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
    svg?: string;
    // svg?: ReactNode;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleFocus: (e: FocusEvent<HTMLInputElement>) => void;
}
