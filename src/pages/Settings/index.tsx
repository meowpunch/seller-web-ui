import React from "react";

import useStyles from "./styles";

const Index: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
           Settings
        </div>
    )
}

export default Index;