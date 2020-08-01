import React from 'react';

import {NavLink, withRouter, RouteComponentProps} from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import useStyles from "./styles";

import {RouteInfo} from "../../routes/index";


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

            <List className={classes.drawerList}>
                {props.routes.map((r, k) => {
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
                                    {r.name}
                                </ListItemText>
                            </ListItem>
                        </NavLink>
                    )
                })}
            </List>
        </Drawer>
    );
}

export default withRouter(Index);