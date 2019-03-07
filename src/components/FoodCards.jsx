import React, { Component } from 'react';


const FoodCards = ({ item, onClick, onChange }) => (
  <div className="order-item" >
    <img src={item.imageUrl}/>
    <h5>{item.title}</h5>
    <p><label htmlFor="price">Price :</label><span>&#8358;{item.price}</span></p>
    <button onClick={onClick} className="button" name="" value="Add" id={item.id}>Add</button>
  </div>
  );
export default FoodCards;
