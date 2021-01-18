import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Headers from './core/components/Header';
import Charts from './pages/Charts';
import Home from './pages/Home';
import Record from './pages/Record';
const Routes = () => (
<Router>
    <Headers/>
    <Switch>
        <Route path="/" exact>
            <Home/>
        </Route>
        <Route path="/records" exact>
            <Record/>
        </Route>
        <Route path="/charts">
            <Charts/>
        </Route>

    </Switch>
</Router>
)

export default Routes;
