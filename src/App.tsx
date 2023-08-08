import { Outlet } from 'react-router-dom';
// import ProgressBar from './View/Components/Loader/Loader';

import NavBar from './View/Components/NavigationBar/NavBar';

function App() {
    return (
        <div className="App">
            <NavBar />
            <Outlet />
            {/* <ProgressBar /> */}
        </div>
    );
}

export default App;
