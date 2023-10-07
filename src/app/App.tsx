import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from 'components/NavigationBar/NavBar';
import { thunk } from 'store/auth/authReducer';
import { useAppDispatch, useAppSelector } from 'store/hooks';

function App() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(thunk.checkUserCookies(user));
  }, []);

  return (
    <div className="app">
      <div className="container">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
