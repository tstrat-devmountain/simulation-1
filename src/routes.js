import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';

export default (
    <Switch>
        <Route path="/edit/:id" component={Form}></Route>
        <Route path="/add" component={Form}></Route>
        <Route path="/" component={Dashboard}></Route>
    </Switch>
)