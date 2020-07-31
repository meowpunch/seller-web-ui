import React from 'react';
import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {routes} from "./routes";

const switchRoutes = (
    <Switch>
        {routes.map((r, k) => {
            return (
                <Route
                    path={r.path}
                    component={r.component}
                    key={k}
                />
            )
        })}
        <Redirect from="/" to="/dashboard"/>
    </Switch>
)

const App: React.FC = () => {
    return (
        <Router>
            {switchRoutes}
        </Router>
    );
}

export default App;
