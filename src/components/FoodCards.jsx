import React, { Component } from 'react';

const FoodCards = ({ menu }) => (
    <ul className="list-group list-group-flush">
      {menu.map(item => (
        <div className="order-item" key={item.id}>
          <img src={item.imageUrl}/>
          <h5>{item.title}</h5>
          <p><label for="price">Price :</label><span>&#8358;{item.price}</span></p>
          <p><label for="quantity">Qty :</label><input type="number" name="quantityqqq" min="0" max="100" step="1" value="1"/></p>
          <button className="button" name="" value="Add" id={item.id}>Add</button>
        </div>
      ))}
    </ul>
  );
export default FoodCards;
