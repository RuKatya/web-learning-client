export type StatusT = 'idle' | 'loading' | 'failed';
export type UserRoleT = 'user' | 'admin';

export interface IUser {
  userName: string;
  userRole: UserRoleT;
  isLogin: boolean;
}

export interface IAuthState {
  user: IUser;
  message: string;
  status: StatusT;
  continueWork: boolean;
}
