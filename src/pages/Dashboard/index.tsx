import React from 'react'
import 'd3-transition'

import Chart from '../../components/Chart'
import useStyles from "./styles";


const Index: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <Chart/>
        </div>
    )
}

export default Index