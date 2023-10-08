import { PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserRole } from 'store/auth/types';

type AuthProtectedProps = {
  isLogin: boolean;
  isAdmin?: boolean;
  userRole?: UserRole;
  userName?: string;
  redirectPath: string;
} & PropsWithChildren;

const AuthProtectedRoute = ({ isLogin, children, redirectPath }: AuthProtectedProps) => {
  const location = useLocation();

  if (isLogin) {
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default AuthProtectedRoute;
