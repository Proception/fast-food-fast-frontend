import React, { Component } from 'react';

export default class OrderControls extends Component {
  render() {
    return (
      <section class="order">
        <div class="container">
          <div class="controls">
            <div class="search-box">
              <input type="text" name="" placeholder="Search Orders" />
            </div>
            <div class="search-button">
              <input class="button" type="button" name="" value="Search" />
            </div>
            <div id="sort" class="sort-controls">
              <label>Sort By : </label>
              <select>
                <option value="New" label="New">New</option>
                <option value="Processing" label="Processing">Processing</option>
                <option value="Cancelled" label="Cancelled">Cancelled</option>
                <option value="Completed" label="Completed">Completed</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
