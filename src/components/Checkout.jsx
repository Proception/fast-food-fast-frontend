import React, { Component } from 'react';
import CheckoutCards from './CheckoutCards.jsx';
import yam from '../assets/images/yam.jpg';
import rice from '../assets/images/rice.jpg';
import fufu from '../assets/images/fufu.jpg';
import beans from '../assets/images/beans.jpg';

export default class Checkout extends Component {
  state = {
    cart: [
      {
        "id": 1,
        "imageUrl": yam,
        "price": 500,
        "title": "Boiled Yam",
      },
      {
        "id": 2,
        "imageUrl": rice,
        "price": 900,
        "title": "Rice",
      },
      {
        "id": 3,
        "imageUrl": fufu,
        "price": 500,
        "title": "Fufu",
      },
      {
        "id": 4,
        "imageUrl": beans,
        "price": 300,
        "title": "Beans",
      },
    ]
  };
  generateCart(){
    const { cart } = this.state;
    return <CheckoutCards cart={cart}/>
  }
  render() {
    return (
      <section className="order">
        <div className="container">
          <div className="fullsection">
            <h3>Your Food Selection</h3>
            <div className="checkout">
              <p><label htmlFor="price">Sum Total : </label><span id="total"></span></p>
              <p><input id="checkout" className="button" type="button" name="" value="Checkout"/></p>
            </div>
            {
            this.generateCart()
            }
          </div>
        </div>
      </section>
      )
    }
  }