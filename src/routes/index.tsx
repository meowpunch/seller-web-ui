import React from "react";
// components
import DashboardPage from "../pages/Dashboard"
import ProfilePage from "../pages/Profile"
import SettingsPage from "../pages/Settings"
import SignInPage from "../pages/SignIn"
import SignUpPage from "../pages/SignUp"
// icons
import {Dashboard, Person, Settings, SvgIconComponent} from "@material-ui/icons";
// router
import {Redirect, Route, Switch} from "react-router-dom";
import useStyles from "./styles";

export interface RouteInfo {
    path: string,
    label: string,
    icon: SvgIconComponent,
    component: React.FC,
}

export const routes: RouteInfo[] = [
    {
        path: "/dashboard",
        label: "Dashboard",
        icon: Dashboard,
        component: DashboardPage
    },
    {
        path: "/profile",
        label: "Profile",
        icon: Person,
        component: ProfilePage
    },
    {
        path: "/settings",
        label: "Settings",
        icon: Settings,
        component: SettingsPage
    },
]

export const authRoutes = [
    {
        path: "/sign-in",
        label: "SignIn",
        component: SignInPage
    },
    {
        path: "/sign-up",
        label: "SignUp",
        component: SignUpPage
    }
]

export const SwitchRoutes: React.FC = () => {
    const classes = useStyles()

    return (
        <Switch>
            <div className={classes.wrapper}>
                {routes.map((r, k) => {
                    return (
                        <Route path={r.path} component={r.component} key={k}/>
                    )
                })}
                <Redirect from="/" to="/dashboard"/>
            </div>
        </Switch>
    )
}

export const AuthRoutes: React.FC = () => {
    return (
        <Switch>
            {authRoutes.map((r, k) => {
                return (
                    <Route path={r.path} component={r.component} key={k}/>
                )
            })}
            <Redirect from="/" to="/sign-in"/>
        </Switch>
    )
}