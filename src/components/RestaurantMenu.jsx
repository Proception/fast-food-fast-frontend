import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import yam from './../assets/images/yam.jpg';
import rice from './../assets/images/rice.jpg';
import fufu from './../assets/images/fufu.jpg';
import beans from './../assets/images/beans.jpg';

export default class RestaurantMenu extends Component {
  render() {
    return (
      <section className="order">
        <div className="container">
          <div className="header">
            <h3>Core Dishes</h3>
            <div className="pagination">
              <a href="#" >&laquo;</a>
              <a href="#" className="active">1</a>
              <a href="#">2</a>
              <a href="#">&raquo;</a>
            </div>
          </div>
          
          <div className="order-item">
            <img src={yam}/>
            <h5>Boiled Yam</h5>
            <p><label for="price">Price :</label><span>&#8358;500</span></p>
            <p><label for="quantity">Qty :</label><input type="number" name="quantityqqq" min="0" max="100" step="1" value="1"/></p>
            <button className="button" name="" value="Add" id="1">Add</button>
          </div>
          <div className="order-item">
            <img src={rice}/>
            <h5>White Rice</h5>
            <p><label for="price">Price :</label><span>&#8358;300</span></p>
            <p><label for="quantity">Qty :</label><input type="number" name="quantityqqq" min="0" max="100" step="1" value="1"/></p>
            <button className="button" name="" value="Add" id="2">Add</button>
          </div>
          <div className="order-item">
            <img src={fufu}/>
            <h5>Fufu</h5>
            <p><label for="price">Price :</label><span>&#8358;150</span></p>
            <p><label for="quantity">Qty :</label><input type="number" name="quantityqqq" min="0" max="100" step="1" value="1"/></p>
            <button className="button" name="" value="Add" id="3">Add</button>
          </div>
          <div className="order-item">
            <img src={beans}/>
            <h5>Beans</h5>
            <p><label for="price">Price :</label><span>&#8358;450</span></p>
            <p><label for="quantity">Qty :</label><input type="number" name="quantityqqq" min="0" max="100" step="1" value="1"/></p>
            <button className="button" name="" value="Add" id="4">Add</button>
          </div>
        </div>
		</section>
    )
  }
}
