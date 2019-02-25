import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavMenu extends Component {
  render() {
    return (
      <header>
        <div class="container">
        <NavLink to="/" ><div id="brand-logo">
            <h1> <span class="">Fast</span> Food Fast</h1>
          </div></NavLink>
          <nav>
            <ul class="nav">
              <li><NavLink to="/" >Home</NavLink></li>
              <li><NavLink to="/menu" >Menu</NavLink></li>
              <li><NavLink to="/login" >Login</NavLink></li>
              <li><NavLink to="/signup" >Register</NavLink></li>
              <li><NavLink to="/checkout" >Checkout</NavLink></li>
                <li><NavLink to="#" >Settings</NavLink>
                  <ul class="dropdown">
                    <li><NavLink to="/orders" >View Pending Orders</NavLink></li>
                    <li><NavLink to="/orderhistory" >View Order History</NavLink></li>
                    <li><NavLink to="/search" >Search Food Items</NavLink></li>
                    <li><NavLink to="/addfooditems" >Add Food Items</NavLink></li>
                  </ul>
                </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
