import { Outlet } from 'react-router-dom';

import NavBar from 'components/NavigationBar/NavBar';

function App() {
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
