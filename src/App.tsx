import React, { useContext } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {AuthRoutes, routes, SwitchRoutes} from './routes'

import SideBar from "./components/SideBar"
import AccountDataContext from './contexts/AccountData';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";


const useStyles = makeStyles(_ =>
    createStyles({
        header: {
            display: 'flex',
            width: '100%',
            height: '80px',
            backgroundColor: 'rgb(240, 240, 240)',
        }
    }))

const App: React.FC = () => {
    const state = useContext(AccountDataContext);

    const classes = useStyles();

    if (state.isAuthenticated) {
        return (
            <Router>
                <SideBar routes={routes}/>
                <div>
                    <div className={classes.header}></div>
                    <SwitchRoutes/>
                </div>
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
