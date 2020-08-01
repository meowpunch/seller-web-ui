import React from 'react';

import {NavLink, RouteComponentProps, withRouter} from 'react-router-dom';

import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import {ExitToApp} from '@material-ui/icons';

import useStyles from "./styles";

import {RouteInfo} from "../../routes";

interface Props extends RouteComponentProps {
    routes: RouteInfo[]
}

const Index: React.FC<Props> = (props: Props) => {
    const classes = useStyles();

    // TODO: it's need for mobile view
    // const [open, setOpen] = React.useState(true);
    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // };
    // const handleDrawerClose = () => {
    //     setOpen(false);
    // };

    const checkActivation = (routeName: string) => {
        return window.location.pathname === routeName;
    }

    const topList = props.routes.map((r, k) => {
        return (
            <NavLink
                to={r.path}
                className={classes.drawerLink}
                activeClassName="active"
                key={k}
            >
                <ListItem button
                          className={checkActivation(r.path) ? classes.itemLinkActive : classes.itemLink}>
                    <ListItemIcon>
                        <r.icon className={classes.itemIcon}/>
                    </ListItemIcon>
                    <ListItemText>
                        {r.label}
                    </ListItemText>
                </ListItem>
            </NavLink>
        )
    })

    const bottomList = <NavLink
        to={"/sign-in"}
        className={classes.drawerLink}
        activeClassName="active"
    >
        <ListItem button
                  className={classes.itemLink}>
            <ListItemIcon>
                <ExitToApp className={classes.itemIcon}/>
            </ListItemIcon>
            <ListItemText>
                Sign out
            </ListItemText>
        </ListItem>
    </NavLink>

    return (

        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={true}
            classes={{paper: classes.drawerPaper}}
        >
            <div className={classes.drawerHeader}>
                <div>[logo] VIBI ver 0.1.0</div>
            </div>
            <Divider variant="middle" light={true}/>

            <div className={classes.drawerContent}>
                <List className={classes.topList}>
                    {topList}
                </List>
                <List className={classes.bottomList}>
                    {bottomList}
                </List>
            </div>
        </Drawer>
    );
}

export default withRouter(Index);