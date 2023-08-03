import {
    RouterProvider,
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import App from '../App';
import HomePage from '../View/Pages/HomePage/HomePage';
import Auth from '../View/Pages/Auth/Auth';
import Login from '../View/Pages/Auth/Login/Login';
import Register from '../View/Pages/Auth/Register/Register';

const RouterPage = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App />}>
                <Route index element={<HomePage />} />
                <Route path="auth" element={<Auth />}>
                    <Route index element={<Login />} />
                    <Route path="reg" element={<Register />} />
                </Route>
            </Route>
        )
    );

    return <RouterProvider router={router} />;
};

export default RouterPage;
