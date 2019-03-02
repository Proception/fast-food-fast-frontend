import React from "react";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";
import NotFound from "./NotFound.jsx"
import Restaurant from "./Restaurant.jsx";
import Signup from './Signup.jsx';
import { Route, Switch } from 'react-router-dom';
// import PrivateRoute from './PrivateRoute.jsx';
import AddFoodItems from './AddFoodItems.jsx';
import Checkout from './Checkout.jsx';
import Orders from './Orders.jsx';
import OrderHistory from './OrderHistory.jsx';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/logout" component={Logout}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/menu" component={Restaurant}></Route>
        <Route path="/addfooditems" component={AddFoodItems}></Route>
        <Route path="/checkout" component={Checkout}></Route>
        <Route path="/orders" component={Orders}></Route>
        <Route path="/orderhistory" component={OrderHistory}></Route>

        {/* <PrivateRoute  exact path="/menu" component={Restaurant}></PrivateRoute> */}
        <Route component={NotFound}></Route>
    </Switch>
);

export default Routes;
