export type Status = 'idle' | 'loading' | 'failed';
export type UserRole = 'user' | 'admin';

export interface IUser {
  userName: string;
  userRole: UserRole;
  isLogin: boolean;
}

export interface IAuthState {
  user: IUser;
  message: string;
  status: Status;
  continueWork: boolean;
}
