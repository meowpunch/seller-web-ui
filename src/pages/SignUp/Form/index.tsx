import React, {FormEvent, useState} from 'react'
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import useStyles from "../styles";
import {CognitoUserAttribute} from "amazon-cognito-identity-js";
import {userPool} from "../../../services/cognito";


const Index: React.FC = () => {
    const classes = useStyles();

    const [companyName, setCompanyName] = useState("");
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState('');

    const textFieldList = [
        {id: 'email', label: 'Email Address', value: email, fn: setEmail},
        {id: 'password', label: 'Password', value: password, fn: setPassword},
        {id: 'companyName', label: 'Company Name', value: companyName, fn: setCompanyName},
        {id: 'phoneNumber', label: 'Phone Number', value: phoneNumber, fn: setPhoneNumber},
    ]

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const emailAttribute: CognitoUserAttribute = new CognitoUserAttribute({Name: 'email', Value: email})
        userPool.signUp(email, password, [emailAttribute], [], (err, data) => {
            if (err) console.log(err)
            console.log(data)
        });
    }
    return (
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    {textFieldList.map((tf, k) => {
                        return (
                            <TextField
                                variant="outlined" margin="normal" required fullWidth key={k}
                                id={tf.id} label={tf.label} name={tf.id} autoComplete={tf.id}
                                type={tf.id} value={tf.value} onChange={(e) => tf.fn(e.target.value)}
                            />
                        )
                    })}
                </Grid>
            </Grid>
            <Button className={classes.submit} type="submit" fullWidth variant="contained" color="primary">
                Sign Up
            </Button>
            <Grid container justify="flex-end">
                <Grid item>
                    <Link href="/sign-in" variant="body2">
                        Already have an account? Sign in
                    </Link>
                </Grid>
            </Grid>
        </form>
    )
}

export default Index;