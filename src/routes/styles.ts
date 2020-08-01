import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

// TODO: refactoring
const drawerWidth = 260;
const transition = {
    transitions: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrapper: {
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
            alignContent: 'center',
            [theme.breakpoints.up("md")]: {
                width: `calc(100% - ${drawerWidth}px)`
            },
            overflow: "auto",
            position: "relative",
            float: "right",
            ...transition,
            maxHeight: "100%",
            width: "100%",
            overflowScrolling: "touch"
        }
    }))

export default useStyles