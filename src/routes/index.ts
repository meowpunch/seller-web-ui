import React from "react";

import DashboardPage from "../components/pages/Dashboard"
import SellerProfile from "../components/pages/Profile"

import {Dashboard, Person, SvgIconComponent} from "@material-ui/icons";


export interface Routes {
    path: string,
    name: string,
    icon: SvgIconComponent,
    component: React.FC,
}

export const routes: Array<Routes> = [
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