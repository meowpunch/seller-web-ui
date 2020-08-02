import React, {FormEvent, useContext, useEffect, useState} from 'react';
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
import useStyles from './styles'
import {Box} from "@material-ui/core";

import Copyright from '../../components/Copyright'
import AccountDataContext from "../../contexts/AccountData";
import {AuthenticationDetails, CognitoUser, CognitoUserSession} from "amazon-cognito-identity-js";
import {userPool} from "../../services/cognito";


const Index: React.FC = () => {
    const state = useContext(AccountDataContext);

    const classes = useStyles()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [accessToken, setAccessToken] = useState('');

    const textFieldList = [
        {id: 'email', label: 'Email Address', value: email, fn: setEmail},
        {id: 'password', label: 'Password', value: password, fn: setPassword}
    ]

    const [url, setUrl] = useState<string>("http://localhost:9000/api/sellers/sign-in");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                console.log(url)
                const result = await fetch(url, {
                    method: 'GET',
                    headers: {"X-Access-Token": accessToken}
                });

                // TODO: setAccount
                state.setAccount({
                    email: "",
                    phoneNumber: "",
                })
            } catch (e) {
                setIsError(true);
                console.log(e);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [accessToken, state, url]);

    const user = new CognitoUser({
        Username: email,
        Pool: userPool
    })

    const authDetails = new AuthenticationDetails({
        Username: email,
        Password: password
    })

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        user.authenticateUser(authDetails, {
            onSuccess: (data: CognitoUserSession) => {
                console.log('onSuccess', data)
                setAccessToken(data.getAccessToken().getJwtToken());

                // TODO: deprecated
                state.authorize();

                // TODO: http -> https
                setUrl("http://localhost:9000/api/sellers/sign-in")
            },

            onFailure: err => {
                console.log('onFailure', err)
            },

            newPasswordRequired: data => {
                console.log('newPasswordRequired', data)
            }
        })

    }

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
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    {textFieldList.map((tf, k) => {
                        return (
                            <TextField
                                variant="outlined" margin="normal" required fullWidth key={k}
                                id={tf.id} label={tf.label} name={tf.id} autoComplete={tf.id}
                                type={tf.id} value={tf.value} onChange={(e) => tf.fn(e.target.value)}
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
                            <Link href="/sign-up" variant="body2">
                                Don't have an account? Sign Up
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