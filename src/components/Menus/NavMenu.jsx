import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

export class NavMenu extends Component {

  isAuthMenu() {
    return (

      <ul className="nav">
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/menu" >Menu</NavLink></li>
        <li><NavLink to="/login" >Login</NavLink></li>
        <li><NavLink to="/signup" >Register</NavLink></li>
        <li><NavLink to="/checkout" >Checkout</NavLink></li>
        <li><NavLink to="#" >Settings</NavLink>
          <ul className="dropdown">
            <li><NavLink to="/orders" >View Pending Orders</NavLink></li>
            <li><NavLink to="/orderhistory" >View Order History</NavLink></li>
            <li><NavLink to="/search" >Search Food Items</NavLink></li>
            <li><NavLink to="/addfooditems" >Add Food Items</NavLink></li>
          </ul>
        </li>
      </ul>
    )
  }

  guestMenu() {
    return (
      <ul className="nav">
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/menu" >Menu</NavLink></li>
        <li><NavLink to="/login" >Login</NavLink></li>
        <li><NavLink to="/signup" >Register</NavLink></li>
      </ul>
    )
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <header>
        <div className="container">
          <NavLink to="/" ><div id="brand-logo"><h1> <span className="">Fast</span> Food Fast</h1>
          </div></NavLink>
          <nav>
            {
              isAuthenticated ? this.isAuthMenu() : this.guestMenu()
            }
          </nav>
        </div>
      </header>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(NavMenu);