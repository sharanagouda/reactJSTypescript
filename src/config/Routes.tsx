import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from '../pages/Home';
import PropsComponent from '../class_components/02Properties';
import HelloComponent from '../class_components/01HelloReact';

function Routes() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" exact component={HelloComponent} />
                    <Route path="/propsNav" exact component={PropsComponent} />
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
