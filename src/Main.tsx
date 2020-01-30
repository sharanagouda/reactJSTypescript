import React from 'react';
// import Routes from './config/Routes';
import { Route, Switch, NavLink, Link } from 'react-router-dom';

import Home from './pages/Home';
import PropsComponent from './class_components/02Properties';
import HelloComponent from './class_components/01HelloReact';
import { AppBar, Toolbar, Typography, IconButton, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Theme } from '@material-ui/core/styles';
import './mainStyles.css';

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
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/contact" exact component={HelloComponent} />
            <Route path="/propsNav" exact component={PropsComponent} />
            <Route component={PageNotFound} />
        </Switch>
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

const Navigation = () => (
    <nav>
        <ul>
            <li>
                <NavLink exact activeClassName="current" to="/">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink exact activeClassName="current" to="/contact">
                    About
                </NavLink>
            </li>
            <li>
                <NavLink exact activeClassName="current" to="/propsNav">
                    Contact
                </NavLink>
            </li>
            <li>
                <NavLink exact activeClassName="current" to="/home">
                    home2
                </NavLink>
            </li>
        </ul>
    </nav>
);

const Main: React.FC = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        react-typescript
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className="mainContainer">
                <div className="rightContainer">
                    <Navigation />
                </div>
                <div className="leftContainer">
                    <Routes />
                </div>
            </div>
        </div>
    );
};

export default Main;
