import { Outlet } from 'react-router-dom';

import NavBar from './View/Components/NavigationBar/NavBar';

// MAYBE NEED NEW REGEX FOR 1.) EN LANG  2.) EMAIL

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
