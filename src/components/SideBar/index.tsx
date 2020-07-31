import React from 'react';

import {NavLink} from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import useStyles from "./styles";

import {RouteInfo} from "../../routes/index"


type Props = {
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
            <Divider/>

            <List className={classes.drawerList}>
                {props.routes.map((r, k) => {
                    return (
                        <NavLink
                            to={r.path}
                            // className={activePro + classes.item}
                            activeClassName="active"
                            key={k}
                        >
                            <ListItem button>
                                <ListItemIcon>
                                    <r.icon/>
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

export default Index;