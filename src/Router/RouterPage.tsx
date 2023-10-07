import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import App from 'app/App';
import Auth from 'app/pages/Auth';
import Login from 'app/pages/Auth/components/Login';
import Register from 'app/pages/Auth/components/Register';

import DashboardPage from 'app/pages/DashboardPage/DashboardPage';
import Error404Page from 'app/pages/Error404Page/Error404Page';
import FavoriteQuizesPage from 'app/pages/FavoriteQuizesPage/FavoriteQuizesPage';
import HomePage from 'app/pages/HomePage/HomePage';
import ProfilePage from 'app/pages/ProfilePage/ProfilePage';
import StatisticPage from 'app/pages/StatisticPage/StatisticPage';

import { ROUTES } from 'config/routes';

import { authUser } from 'store/auth/selectors';
import { useAppSelector } from 'store/hooks';

import AuthProtectedRoute from './protectedRoutes/AuthProtectedRoute';
import RoleProtectedRoute from './protectedRoutes/RoleProtectedRoute';

const RouterPage = () => {
  const { isLogin, userRole, userName } = useAppSelector(authUser);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        <Route
          path={ROUTES.auth.mask}
          element={
            <AuthProtectedRoute redirectPath="/" isLogin={isLogin} userRole={userRole} userName={userName}>
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
            path={ROUTES.auth.regUser.mask}
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
            <RoleProtectedRoute redirectPath="/" isLogin={isLogin} isAdmin={userRole === 'admin'}>
              <DashboardPage />
            </RoleProtectedRoute>
          }
        />
        <Route
          path={ROUTES.profile.mask}
          element={
            <RoleProtectedRoute redirectPath="/" isLogin={isLogin} isAdmin={userRole === 'user'}>
              <ProfilePage />
            </RoleProtectedRoute>
          }
        />
        <Route path={ROUTES.userStatistic.mask} element={<StatisticPage />} />
        <Route path={ROUTES.favoriteQuizes.mask} element={<FavoriteQuizesPage />} />
        <Route path={ROUTES.error.mask} element={<Error404Page />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default RouterPage;
