import { Outlet } from 'react-router-dom';
import { Login, Registration } from './View/Components/Forms';
import NavBar from './View/Components/NavigationBar/NavBar/NavBar';

function App() {
    return (
        <div className="App">
            <NavBar />
            <Login />
            <Registration />
            <Outlet />
        </div>
    );
}

export default App;
