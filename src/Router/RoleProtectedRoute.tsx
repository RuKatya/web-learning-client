import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface IRoleProtectedRoute {
    children: ReactNode | ReactNode[];
    isLogin: boolean;
    isAdmin: boolean;
    redirectPath: string;
}
// can do with optional isAdmin
// console.log(isAdmin, typeof isAdmin, typeof isAdmin === 'undefined');
const RoleProtectedRoute = ({
    isLogin,
    isAdmin,
    children,
    redirectPath,
}: IRoleProtectedRoute) => {
    if (!isLogin || !isAdmin) {
        return <Navigate to={redirectPath} replace />;
    }
    return <>{children}</>;
};

export default RoleProtectedRoute;
