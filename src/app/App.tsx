import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Container from 'components/Container';
import Header from 'components/Header';

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
      <Container>
        <Header />
        <Outlet />
      </Container>
    </div>
  );
}

export default App;
