import { Navigate } from 'react-router-dom';

interface IAuthProtectedRoute {
    children: any;
    isLogin: boolean;
    isAdmin?: boolean;
    redirectPath: string;
}

const AuthProtectedRoute = ({
    isLogin,
    children,
    redirectPath,
    isAdmin,
}: IAuthProtectedRoute) => {
    if (isLogin) {
        return <Navigate to={redirectPath} replace />;
    }
    return <>{children}</>;
};

export default AuthProtectedRoute;
