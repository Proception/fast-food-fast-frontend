import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import RestaurantControls from './RestaurantControls.jsx';
import RestaurantMenu from './RestaurantMenu.jsx';

export default class Restaurant extends Component {
  render() {
    return (
      <div class="main-container">
        <h2> Restaurant Menu</h2>
        <RestaurantControls/>
        <RestaurantMenu/>
    </div>
    )
  }
}
