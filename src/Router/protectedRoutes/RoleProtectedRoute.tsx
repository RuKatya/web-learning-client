import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

type RoleProtectedRoute = {
  isLogin: boolean;
  isAdmin: boolean;
  redirectPath: string;
} & PropsWithChildren;

// can do with optional isAdmin
// console.log(isAdmin, typeof isAdmin, typeof isAdmin === 'undefined');
const RoleProtectedRoute: FC<RoleProtectedRoute> = ({ isLogin, isAdmin, children, redirectPath }) => {
  if (!isLogin || !isAdmin) {
    return <Navigate to={redirectPath} replace={true} />;
  }
  return <>{children}</>;
};

export default RoleProtectedRoute;
