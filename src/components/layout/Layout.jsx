import React from 'react';
import useStyles from "../style";
import {Typography} from "@mui/material";


const Layout = () => {
    const classes = useStyles();

    return (
        <div className = {classes.root}>

            <div className = {classes.rightSidebar}>
                <Typography>
                نوار راست
                </Typography>
            </div>

            <div className = {classes.mainPart}>
                Main part
            </div>

            <div className = {classes.leftSidebar}>left side bar</div>

        </div>
    );
};

export default Layout;
