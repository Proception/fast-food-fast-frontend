import React, { Component } from 'react';

const CheckoutCards = ({ cart }) => (
  <div id="sec">
      {cart.map(item => (
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
                <input type="number" name="1" min="0" max="100" step="1" value="1"/></label>
            </p>
          </div>
          <div className="item-commands">
            <p>
              <img src={item.imageUrl}/>
            </p>
            <p>
              <input className="button" type="button" value="Delete Item" name="" id={item.id}/>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
export default CheckoutCards;
