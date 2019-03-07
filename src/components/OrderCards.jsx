import React, { Component } from 'react';

const OrderCards = ({ orders }) => (
  <div>
  {
    orders.map(item => (
      <div class="new-order" key={item.order_id}>
        <div class="order-details">
          <p>
            <label for="orderno">Order No. :</label><span>{item.order_id}</span>
          </p>
          <p>
            <label for="orderdate">Order Date :</label><span>{new Date(item.order_date).toGMTString()}</span>
          </p>
          <p>
            <label for="totalprice">Total Amount :</label><span>₦{item.order_amount}</span>
          </p>
          <p>
            <label for="status">Status :</label><span>{item.order_status}</span>
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
