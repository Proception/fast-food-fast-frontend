import React, { Component } from 'react';

const OrderHistoryCards = ({ orders }) => (
  
    <div class="container">
        {orders.map(item => (
          <div class="old-order" key={item.id}>
            <p><label for="orderno">Order No. :</label><span>{item.orderNo}</span></p>
            <p><label for="orderdate">Order Date :</label><span>{item.orderDate}</span></p>
            <p><label for="totalprice">Total Amount :</label><span>&#8358;{item.price}</span></p>
            <p><label for="status">Status :</label> <span>{item.orderStatus}</span></p>
            <p><label for="shippingaddress">Shipping Address :</label> <span>{item.orderAddress}</span></p>
          </div>
        ))}
    </div>
  );
export default OrderHistoryCards;
