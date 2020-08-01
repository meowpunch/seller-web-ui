import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import { defaultFont } from "../../themes/default";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            backgroundColor: "#24282c",
            color: "white",

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
        drawerContent: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: 'space-between',
        },
        topList: {
            color: "white",
            marginTop: "20px",
            paddingLeft: "0",
            paddingTop: "0",
            paddingBottom: "0",
            marginBottom: "0",
            listStyle: "none",
            position: "unset"
        },
        bottomList: {
            color: "white",
            marginTop: "0",
            paddingLeft: "0",
            paddingTop: "0",
            paddingBottom: "0",
            marginBottom: "20px",
            listStyle: "none",
            position: "unset"
        },
        drawerLink: {
            position: "relative",
            display: "block",
            textDecoration: "none",
            "&:hover,&:focus,&:visited,&": {
                color: "white"
            }
        },
        itemLink: {
            width: "auto",
            transition: "all 300ms linear",
            margin: "10px 15px 0",
            borderRadius: "3px",
            position: "relative",
            display: "flex",
            padding: "10px 15px",
            backgroundColor: "transparent",
            ...defaultFont
        },
        itemLinkActive: {
            width: "auto",
            transition: "all 300ms linear",
            margin: "10px 15px 0",
            borderRadius: "3px",
            position: "relative",
            display: "flex",
            padding: "10px 15px",
            backgroundColor: "#068eef",
            ...defaultFont
        },
        itemIcon: {
            width: "24px",
            height: "30px",
            fontSize: "24px",
            lineHeight: "30px",
            float: "left",
            marginRight: "15px",
            textAlign: "center",
            verticalAlign: "middle",
            color: "rgba(255, 255, 255, 0.8)"
        },
        itemText: {
            ...defaultFont,
            margin: "0",
            lineHeight: "30px",
            fontSize: "14px",
            color: "white"
        }
    }),
);

export default useStyles