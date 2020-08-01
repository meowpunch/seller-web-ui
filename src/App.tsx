import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {routes, SwitchRoutes} from './routes/index'

import SideBar from "./components/SideBar"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";



const useStyles = makeStyles((theme: Theme) =>
    createStyles({}),
);

const App: React.FC = () => {
    const classes = useStyles()

    return (
        <Router>
            <div>
                <SideBar routes={routes}/>
                <SwitchRoutes/>
            </div>
        </Router>
    );
}

export default App;
