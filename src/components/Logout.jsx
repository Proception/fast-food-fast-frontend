import React, { Component } from 'react';
import RestaurantControls from './RestaurantControls.jsx';
import RestaurantMenu from './RestaurantMenu.jsx';

export default class Restaurant extends Component {

    componentDidMount(){
        localStorage.removeItem('authToken');
        window.location.replace('/');
    }
  render() {
    return (
      <div className="main-container">
        <h2> Logging out</h2>
    </div>
    )
  }
}
