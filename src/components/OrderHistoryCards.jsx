import React, { Component } from 'react';

const OrderHistoryCards = ({ userOrders }) => (
    <div class="container">
        {userOrders.map(item => (
          <div class="old-order" key={item.order_id}>
            <p><label htmlFor="orderno">Order No. :</label><span>{item.order_id}</span></p>
            <p><label htmlFor="orderdate">Order Date :</label><span>{new Date(item.order_date).toGMTString()}</span></p>
            <p><label htmlFor="totalprice">Total Amount :</label><span>&#8358;{item.order_amount}</span></p>
            <p><label htmlFor="status">Status :</label> <span>{item.order_status}</span></p>
          </div>
        ))}
    </div>
  );
export default OrderHistoryCards;
