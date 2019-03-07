import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { setToken } from '../../actions/authActions';

export class NavMenu extends Component {

  componentDidMount(){
    const token = localStorage.getItem('authToken');
    if (token) {
      try {
        const decoded = jwt_decode(token);
        this.props.setToken(decoded);
      } catch (error) {
      }

    }
  }
  getAdminMenu(){
    return (
      <div>
        <li><NavLink to="/orders" >View Pending Orders</NavLink></li>
        <li><NavLink to="/search" >Search Food Items</NavLink></li>
        <li><NavLink to="/addfooditems" >Add Food Items</NavLink></li>
      </div>
    )
  }

  isAuthMenu() {
    const { cart } = this.props.order;
    const { role_id, full_name } = this.props.auth.user;
    return (
      <ul className="nav">
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/menu" >Menu</NavLink></li>
        <li><NavLink to="/checkout" >Checkout { cart.length > 0 ? ` (${this.props.order.cart.length}) ` : ""}</NavLink></li>
        <li><NavLink to="/logout" >Logout</NavLink></li>
        <li><NavLink to="#" >Settings</NavLink>
          <ul className="dropdown">
            <li><NavLink to="/orderhistory" >View Order History</NavLink></li>
            {
              (role_id === 200) ? this.getAdminMenu()  : ""
            }
          </ul>
        </li>
        <li className="on-login user"><a><span>Hi, { full_name || "User" }</span></a></li>
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
        <li className="on-login user"><a><span>Hi, Guest</span></a></li>
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
  order: state.order,
});

export default connect(mapStateToProps, { setToken })(NavMenu);