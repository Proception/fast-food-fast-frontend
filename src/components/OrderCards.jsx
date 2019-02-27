import React, { Component } from 'react';

const OrderCards = ({ orders }) => (
  <div>
  {
    orders.map(item => (
      <div class="new-order" key={item.id}>
        <div class="order-details">
          <p>
            <label for="orderno">Order No. :</label><span>{item.orderNo}</span>
          </p>
          <p>
            <label for="orderdate">Order Date :</label><span>{item.orderDate}</span>
          </p>
          <p>
            <label for="totalprice">Total Amount :</label><span>₦{item.price}</span>
          </p>
          <p>
            <label for="status">Status :</label><span>{item.orderStatus}</span>
          </p>
          <p>
            <label for="shippingaddress">Shipping Address :</label><span>{item.orderAddress}</span>
          </p>
        </div>
        <div class="order-commands">
          <p>
            <input class="button" type="button" name="" value="Accept" />
          </p>
          <p>
            <input class="button" type="button" name="" value="Decline" />
          </p>
          <p>
            <input class="button" type="button" name="" value="Mark as Fulfilled" />
          </p>
        </div>
      </div>
    ))
  }
  </div>
);
export default OrderCards;
