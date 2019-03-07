import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class RestaurantControls extends Component {
  render() {
    return (
      <section className="order">
          <div className="container">
            <div className="controls">
              <div className="search-box">
                <input type="text" name="" placeholder="Search Food Items"></input>
              </div>
              <div className="search-button">
                <input className="button" type="button" name="" value="Search"></input>
              </div>
              <div className="sort-controls">
                <select>
                    <option value="0" label="Sort by:"></option>
                    <option value="1" label="Available"></option>
                    <option value="2" label="Finished"></option>
                </select>
              </div>
            </div>
          </div>
        </section>
    )
  }
}
