import React, { Component } from 'react';
import OrderCards from './OrderCards.jsx';
import OrderControls from './OrderControls.jsx';

export default class Orders extends Component {
  state = {
    orders: [
      {
        "id": 1,
        "orderNo": "12",
        "price": 5000,
        "orderDate": "30 August, 2016",
        "orderStatus": "Pending",
        "orderAddress": "52, Enitan str, Aguda, Surulere, Lagos State",
      },
      {
        "id": 2,
        "orderNo": "54",
        "price": 1200,
        "orderDate": "Boiled Yam",
        "orderStatus": "In Progress",
        "orderAddress": "52, Enitan str, Aguda, Surulere, Lagos State",
      },
      {
        "id": 3,
        "orderNo": "67",
        "price": 1500,
        "orderDate": "30 October, 2017",
        "orderStatus": "Fulfilled",
        "orderAddress": "52, Enitan str, Aguda, Surulere, Lagos State",
      },
      {
        "id": 4,
        "orderNo": "33",
        "price": 3000,
        "orderDate": "30 January, 2018",
        "orderStatus": "Completed",
        "orderAddress": "52, Enitan str, Aguda, Surulere, Lagos State",
      },
    ]
  };
  generateOrders(){
    const { orders } = this.state;
    return <OrderCards orders={orders}/>
  }
  render() {
    return (
      <div>
        <OrderControls/>
        <section class="order">
          <div id="sec" class="container">
            {
              this.generateOrders()
            }
            <div class="pagination">
              <a href="#" >&laquo;</a>
              <a href="#" class="active">1</a>
              <a href="#">2</a>
              <a href="#">&raquo;</a>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
