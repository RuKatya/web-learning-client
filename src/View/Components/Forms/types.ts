export interface IAxiosRegistration {
    messsage: string;
    continueWork: boolean;
}

export interface IAxiosLogin extends IAxiosRegistration {
    userName: string;
    userRole: string;
    isLogin: boolean;
}
