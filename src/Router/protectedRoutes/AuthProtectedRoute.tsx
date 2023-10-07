import { FC, PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserRoleT } from 'store/auth/types';

type AuthProtectedRoute = {
  isLogin: boolean;
  isAdmin?: boolean;
  userRole?: UserRoleT;
  userName?: string;
  redirectPath: string;
} & PropsWithChildren;

const AuthProtectedRoute: FC<AuthProtectedRoute> = ({ isLogin, children, redirectPath }) => {
  const location = useLocation();

  if (isLogin) {
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default AuthProtectedRoute;
