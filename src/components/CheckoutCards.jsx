import React, { Component } from 'react';

const CheckoutCards = ({ item, onClick, onChange }) => (
  <div className="selected-items" key={item.id}>
    <div className="item-details">
      <p>
        <label htmlFor="foodname">Food Name :<span>{item.title}</span></label>
      </p>
      <p>
        <label htmlFor="price">Price per unit :<span>₦{item.price}</span></label>
      </p>
      <p>
        <label htmlFor="quantity">Qty :
                <input id={item.id} onChange={onChange} type="number" name="1" min="1" max="100" step="1" defaultValue={item.quantity}/></label>
      </p>
    </div>
    <div className="item-commands">
      <p>
        <img src={item.imageUrl} />
      </p>
      <p>
        <input onClick={onClick} className="button" type="button" value="Delete Item" name="" id={item.id} />
      </p>
    </div>
  </div>
);
export default CheckoutCards;
