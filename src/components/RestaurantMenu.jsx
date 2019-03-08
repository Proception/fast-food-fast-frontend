import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItemToCart, updateCartTotal } from '../actions/orderActions';
import Notify from '../utils/Notify';
import FoodCards from './FoodCards.jsx'
import yam from '../assets/images/yam.jpg';
import rice from '../assets/images/rice.jpg';
import fufu from '../assets/images/fufu.jpg';
import beans from '../assets/images/beans.jpg';

export class RestaurantMenu extends Component {
  state = {
    menu: [ 
      {
        "id": 1,
        "imageUrl": yam,
        "price": 500,
        "title": "Boiled Yam",
        "quantity": 1,
      },
      {
        "id": 2,
        "imageUrl": rice,
        "price": 900,
        "title": "Rice",
        "quantity": 1,
      },
      {
        "id": 3,
        "imageUrl": fufu,
        "price": 500,
        "title": "Fufu",
        "quantity": 1,
      },
      {
        "id": 4,
        "imageUrl": beans,
        "price": 300,
        "title": "Beans",
        "quantity": 1,
      },
    ],
  };

  handleClick = (e, data) => {
    const { user } = this.props.auth;
    if(user){
      const { addItemToCart, updateCartTotal } = this.props;
      addItemToCart(data);
      updateCartTotal();
    }

    if(!user){
      Notify.notifyError('You need to be logged in to perform that action');
    }
  }

  generateMenu(){
    const { menu } = this.state;
    return (
      <ul className="list-group list-group-flush">
      {menu.map(item => (
          <FoodCards key={item.id} onClick={ ((e) => this.handleClick(e, item)) }  item={item}/>
          ))}
      </ul>
      )
  }
  render() {
    return (
      <section className="order">
        <div className="container">
        <div className="header">
            <h3>Core Dishes</h3>
          </div>
          {
            this.generateMenu()
          }
        </div>
		</section>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  order: state.order,
});

export default connect(mapStateToProps, { addItemToCart, updateCartTotal})(RestaurantMenu);
