import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { ROUTES } from 'config/routes';
import { authUser } from 'store/auth/selectors';
import { useAppSelector } from 'store/hooks';

import App from './App';
import Auth from './pages/Auth';
import Login from './pages/Auth/components/Login';
import Register from './pages/Auth/components/Register';
import Dashboard from './pages/Dashboard';
import Error404 from './pages/Error404';
import FavQuizes from './pages/FavQuizes';
import Home from './pages/Home/Home';
import Profile from './pages/Profile';
import Statistic from './pages/Statistic';

import { RoleProtectedRoute, AuthProtectedRoute } from './protectedRoutes';

const Router = () => {
  const { isLogin, userRole, userName } = useAppSelector(authUser);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />

        <Route
          path={ROUTES.auth.mask}
          element={
            <AuthProtectedRoute
              redirectPath={ROUTES.home.mask}
              isLogin={isLogin}
              userRole={userRole}
              userName={userName}
            >
              <Auth />
            </AuthProtectedRoute>
          }
        >
          <Route
            index
            element={
              <AuthProtectedRoute userRole={userRole} userName={userName} redirectPath="/" isLogin={isLogin}>
                <Login />
              </AuthProtectedRoute>
            }
          />
          <Route
            path={ROUTES.auth.saveUser.mask}
            element={
              <AuthProtectedRoute userRole={userRole} userName={userName} redirectPath="/" isLogin={isLogin}>
                <Register />
              </AuthProtectedRoute>
            }
          />
        </Route>
        <Route
          path={ROUTES.dashboard.mask}
          element={
            <RoleProtectedRoute redirectPath={ROUTES.home.mask} isLogin={isLogin} isAdmin={userRole === 'admin'}>
              <Dashboard />
            </RoleProtectedRoute>
          }
        />
        <Route
          path={ROUTES.profile.mask}
          element={
            <RoleProtectedRoute redirectPath={ROUTES.home.mask} isLogin={isLogin} isAdmin={userRole === 'user'}>
              <Profile />
            </RoleProtectedRoute>
          }
        />
        <Route path={ROUTES.statistic.mask} element={<Statistic />} />
        <Route path={ROUTES.favQuizes.mask} element={<FavQuizes />} />
        <Route path={ROUTES.error.mask} element={<Error404 />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default Router;
