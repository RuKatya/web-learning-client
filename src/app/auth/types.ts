export type StatusT = 'idle' | 'loading' | 'failed';

export interface IUser {
    userName: string;
    userRole: string;
    isLogin: boolean;
}

export interface IAuthState {
    user: IUser;
    message: string;
    status: StatusT;
    continueWork: boolean;
}
