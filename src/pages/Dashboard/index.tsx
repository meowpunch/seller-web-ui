import React from 'react'
import 'd3-transition'

import Chart from '../../components/Chart'
import useStyles from "./styles";
import {Grid, Card, Container, CardContent} from "@material-ui/core";


const Index: React.FC = () => {
    const classes = useStyles();

    const topCardList = ['A', 'B', 'C', 'D']
    const middleCardList = ['a', 'b', 'c']
    const bottomCardList = ['Aa', 'Bb']

    return (
        <div className={classes.wrapper}>
            {/*<Chart/>*/}
            <Container className={classes.container}>
                <Grid container spacing={4}>
                    {topCardList.map((c, k) => {
                        return (
                            <Grid item xs={12} sm={6} md={3} key={k}>
                                <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
                                        {c}
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
                <Grid container spacing={4}>
                    {middleCardList.map((c, k) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} key={k}>
                                <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
                                        <Chart/>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
                <Grid container spacing={4}>
                    {bottomCardList.map((c, k) => {
                        return (
                            <Grid item xs={12} sm={6} md={6} key={k}>
                                <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
                                        <Chart/>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>

        </div>
    )
}

export default Index