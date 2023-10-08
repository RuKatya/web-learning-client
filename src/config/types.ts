import { ChangeEvent, FocusEvent, InputHTMLAttributes, ReactNode } from 'react';
import { UserRole } from 'store/auth/types';

export interface ResponseRegistration {
  message: string;
  continueWork: boolean;
}

export interface ResponseLogout {
  isLogin: boolean;
  continueWork: boolean;
}

export interface ResponseLogin extends ResponseRegistration {
  userName: string;
  userRole: UserRole;
  isLogin: boolean;
}

export interface IInputForm extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  error: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFocus: (e: FocusEvent<HTMLInputElement>) => void;
  afterSlot?: ReactNode;
}
