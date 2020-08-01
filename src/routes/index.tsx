import React from "react";
// components
import DashboardPage from "../components/pages/Dashboard"
import SellerProfile from "../components/pages/Profile"
// icons
import {Dashboard, Person, SvgIconComponent} from "@material-ui/icons";
// router
import {Redirect, Route, Switch} from "react-router-dom";
import useStyles from "./styles";

export interface RouteInfo {
    path: string,
    name: string,
    icon: SvgIconComponent,
    component: React.FC,
}

export const routes: RouteInfo[] = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: Dashboard,
        component: DashboardPage
    },
    {
        path: "/profile",
        name: "Profile",
        icon: Person,
        component: SellerProfile
    }
]

export const SwitchRoutes: React.FC = () => {
    const classes = useStyles()

    return (
        <div className={classes.wrapper}>
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
        </div>
    )
}