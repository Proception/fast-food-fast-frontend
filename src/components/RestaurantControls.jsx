import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class RestaurantControls extends Component {
  render() {
    return (
      <section class="order">
          <div class="container">
            <div class="controls">
              <div class="search-box">
                <input type="text" name="" placeholder="Search Food Items"></input>
              </div>
              <div class="search-button">
                <input class="button" type="button" name="" value="Search"></input>
              </div>
              <div class="sort-controls">
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
