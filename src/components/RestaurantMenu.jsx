import React, { Component } from 'react';
import FoodCards from './FoodCards.jsx'
import yam from '../assets/images/yam.jpg';
import rice from '../assets/images/rice.jpg';
import fufu from '../assets/images/fufu.jpg';
import beans from '../assets/images/beans.jpg';

export default class RestaurantMenu extends Component {
  state = {
    menu: [
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

  generateMenu(){
    const { menu } = this.state;
    return <FoodCards menu={menu}/>
  }
  render() {
    return (
      <section className="order">
        <div className="container">
        <div className="header">
            <h3>Core Dishes</h3>
            <div className="pagination">
              <a href="#" >&laquo;</a>
              <a href="#" className="active">1</a>
              <a href="#">2</a>
              <a href="#">&raquo;</a>
            </div>
          </div>

          {
            this.generateMenu()
          }
        </div>
		</section>
    )
  }
}
