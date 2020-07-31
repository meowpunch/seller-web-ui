import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {/*
            marginRight: theme.spacing(1), */
        },
        hide: {
            display: 'none',
        },
        title: {
            flexGrow: 1,
        },
        list: {
            width: 250,
        },
        fullList: {
            width: 'auto',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
            position: 'absolute',
            top: 'unset',
            left: 'unset'
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: 'center',
        },
        drawerList: {
            marginTop: "20px",
            paddingLeft: "0",
            paddingTop: "0",
            paddingBottom: "0",
            marginBottom: "0",
            listStyle: "none",
            position: "unset"
        }
    }),
);

export default useStyles