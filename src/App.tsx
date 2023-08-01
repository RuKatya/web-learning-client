import { Outlet } from 'react-router-dom'
import NavBar from './View/Components/NavigationBar/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;