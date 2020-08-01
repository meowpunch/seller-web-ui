import React, { useContext } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {AuthRoutes, routes, SwitchRoutes} from './routes'

import SideBar from "./components/SideBar"
import AccountDataContext from './context/AccountData';

const App: React.FC = () => {

    const state = useContext(AccountDataContext);

    if (state.account.isAuthenticated) {
        return (
            <Router>
                <SideBar routes={routes}/>
                <SwitchRoutes/>
            </Router>
        );
    } else {
        return (
            <Router>
                <AuthRoutes/>
            </Router>
        );
    }

}

export default App;
