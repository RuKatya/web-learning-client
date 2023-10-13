import { Outlet } from 'react-router-dom';

import Container from 'components/Container';
import Header from 'components/Header';

import useAuth from 'hooks/auth/useAuth';

function App() {
  useAuth();

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
