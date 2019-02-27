import React, { Component } from 'react';
import RestaurantControls from './RestaurantControls.jsx';
import RestaurantMenu from './RestaurantMenu.jsx';

export default class Restaurant extends Component {
  render() {
    return (
      <div className="main-container">
        <h2> Restaurant Menu</h2>
        <RestaurantControls/>
        <RestaurantMenu/>
    </div>
    )
  }
}
