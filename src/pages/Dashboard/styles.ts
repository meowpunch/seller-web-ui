import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrapper: {
            display: 'flex',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        container: {
            marginTop: theme.spacing(5),
            display: 'flex',
            width: '95%',
            height: '90%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        card: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
        cardMedia: {
            paddingTop: '56.25%', // 16:9
        },
        cardContent: {
            fontSize: theme.spacing(2),
        }
    }),
);

export default useStyles