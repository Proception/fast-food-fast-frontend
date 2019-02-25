import React from "react";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import NotFound from "./NotFound.jsx"
import Restaurant from "./Restaurant.jsx";
import { Route, Switch } from 'react-router-dom';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/menu" component={Restaurant}></Route>
        <Route component={NotFound}></Route>
    </Switch>
);

export default Routes;
