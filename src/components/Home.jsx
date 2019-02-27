import React, { Component } from 'react';

export default class Home extends Component {
    render() {
      return (
        <section id="showcase">
          <div className="container">
            <h1>Affordable meals, delivered very fast to your doorstep</h1>
            <a href="restaurantmenu.html"><button type="button" className="button_1" >Food Menu</button></a>
          </div>
        </section>
      )
    }
  }