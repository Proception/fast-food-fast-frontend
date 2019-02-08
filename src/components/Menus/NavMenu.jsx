import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavMenu extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><NavLink to="/" >Home</NavLink></li>
          <li><NavLink to="/login" >Login</NavLink></li>
        </ul>
      </div>
    )
  }
}
