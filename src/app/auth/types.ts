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

export enum RoutesE {
    SAVE_USER = '/auth/save-user',
    LOGIN_USER = '/auth/login-user',
    LOGOUT_USER = '/auth/user-logout',
}
