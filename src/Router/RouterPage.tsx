import {
    RouterProvider,
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import App from '../App';
import Auth from '../View/Pages/Auth/Auth';
import Login from '../View/Pages/Auth/Login/Login';
import Register from '../View/Pages/Auth/Register/Register';
import { useAppSelector } from '../app/hooks';
import { authUser } from '../app/auth/selectors';

import HomePage from '../View/Pages/HomePage/HomePage';
import ProfilePage from '../View/Pages/ProfilePage/ProfilePage';
import StatisticPage from '../View/Pages/StatisticPage/StatisticPage';
import DashboardPage from '../View/Pages/DashboardPage/DashboardPage';
import AuthProtectedRoute from './AuthProtectedRoute';
import RoleProtectedRoute from './RoleProtectedRoute';

const RouterPage = () => {
    const { isLogin, userRole } = useAppSelector(authUser);
    console.log(isLogin);
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App />}>
                <Route index element={<HomePage />} />

                <Route
                    path="auth"
                    element={
                        <AuthProtectedRoute redirectPath="/" isLogin={isLogin}>
                            <Auth />
                        </AuthProtectedRoute>
                    }
                >
                    <Route index element={<Login />} />
                    <Route path="reg" element={<Register />} />
                </Route>
                <Route
                    path="admin-dashboard"
                    element={
                        <RoleProtectedRoute
                            redirectPath="/"
                            isLogin={isLogin}
                            isAdmin={userRole === 'admin'}
                        >
                            <DashboardPage />
                        </RoleProtectedRoute>
                    }
                />
                <Route
                    path="user-profile"
                    element={
                        <RoleProtectedRoute
                            redirectPath="/"
                            isLogin={isLogin}
                            isAdmin={userRole === 'user'}
                        >
                            <ProfilePage />
                        </RoleProtectedRoute>
                    }
                />
                <Route path="user-statistic" element={<StatisticPage />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
};

export default RouterPage;
