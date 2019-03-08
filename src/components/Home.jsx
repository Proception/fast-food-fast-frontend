import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
    render() {
      return (
        <section id="showcase">
          <div className="container">
            <h1>Affordable meals, delivered very fast to your doorstep</h1>
            <NavLink to="/menu" ><button type="button" className="button_1" >Food Menu</button></NavLink>
          </div>
        </section>
      )
    }
  }