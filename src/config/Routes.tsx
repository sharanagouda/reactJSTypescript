import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import { AppBar, Toolbar, Typography, IconButton, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Theme } from '@material-ui/core/styles';
import Home from '../pages/Home';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flex: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function Routes() {
    const classes = useStyles();
    return (
        <Router>
            <div className={classes.root}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            react-material-ui
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/main" exact component={Home} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </Router>
    );
}

const PageNotFound = () => (
    <div style={{ marginTop: '75px' }}>
        <section className="section content has-text-centered" style={{ minHeight: '750px' }}>
            <h1 style={{ textAlign: 'center', color: '#8B0000' }}> #404 Page not found</h1>
            <p className="is-size-5" style={{ borderTop: '1px solid #222', paddingTop: '20px', textAlign: 'center' }}>
                Looks like you found a page that doesn't exist!
            </p>
            <p style={{ textAlign: 'center' }}>
                You can go back home by clicking <Link to="/">here</Link>.
            </p>
        </section>
    </div>
);

export default Routes;
