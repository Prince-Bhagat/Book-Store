import React, { useState, useEffect } from 'react'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }
}));

function Appbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="sticky"
                color="primary"
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        className={classes.menuButton}>
                        <MenuIcon size="large" />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>PICT LIBRARY</Typography>
                    <Link to="/addBook" style={{ textDecoration: "none", color : "inherit" }}>
                        <Button color="inherit">Add Book</Button>
                    </Link>
                    <Button color="inherit">Login</Button>

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withRouter(Appbar);