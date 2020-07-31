import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import {SwitchRoutes, routes} from './routes/index'

import SideBar from "./components/SideBar"


const App: React.FC = () => {
    return (
        <Router>
            <SideBar routes={routes}/>
            <SwitchRoutes/>
        </Router>
    );
}

export default App;
