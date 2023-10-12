import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

type RoleProtectedProps = {
  isLogin: boolean;
  isAdmin: boolean;
  redirectPath: string;
} & PropsWithChildren;

const RoleProtectedRoute = ({ isLogin, isAdmin, children, redirectPath }: RoleProtectedProps) => {
  if (!isLogin || !isAdmin) {
    return <Navigate to={redirectPath} replace={true} />;
  }
  return <>{children}</>;
};

export default RoleProtectedRoute;
