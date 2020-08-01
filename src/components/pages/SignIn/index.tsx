import React, {useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './style'
import {Box} from "@material-ui/core";

import Copyright from '../../Copyright'
// import {SignIn} from "../../../services/api";


const Index: React.FC = () => {
    const classes = useStyles()

    const [url, setUrl] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        console.log("wth")
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            console.log(url)
            const result = await fetch(url, {
                method: 'GET',
                headers: {"X-Access-Token": email}
            });

            //setData(result.data);
            console.log(result)


            setIsLoading(false);
        };

        fetchData().then(() => {
            console.log(url)});
    }, [url]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const textFieldList = [
        {id: 'email', label: 'Email Address', value: email, fn: setEmail},
        {id: 'password', label: 'Password', value: password, fn: setPassword}
    ]

    const SignIn = (accessToken: string) => {


        return setUrl;
    }

    // const doFetch = SignIn("1234")
    // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     console.log('Email:', email, 'Password: ', password);
    //
    //     // TODO: fetch API with AWS cognito
    //     const cognitoId = "1234"
    //     SignIn(cognitoId)
    // }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate onSubmit={(e) => {
                    e.preventDefault()
                    const data = {'email': email, 'password': password}
                    console.log(data)
                    // TODO: http -> https
                    setUrl("http://localhost:9000/api/sellers/sign-in")
                }}>
                    {textFieldList.map((tf, k) => {
                        return (
                            <TextField
                                variant="outlined" margin="normal" required fullWidth key={k}
                                id={tf.id} label={tf.label} name={tf.id} autoComplete={tf.id}
                                value={tf.value} onChange={(e) => tf.fn(e.target.value)}
                            />
                        )
                    })}
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary"/>}
                        label="Remember me"
                    />
                    <Link href='/dashboard'>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                    </Link>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright/>
            </Box>
        </Container>
    );
}

export default Index;