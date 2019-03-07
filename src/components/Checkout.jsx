import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckoutCards from './CheckoutCards.jsx';
import { removeItemFromCart, updateCartTotal, updateItemQuantity, makeOrder } from '../actions/orderActions';
import Notify from '../utils/Notify';

export class Checkout extends Component {
  
  constructor(props) {
    super(props);
    this.handleOrder = this.handleOrder.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (e, data) => {
    const { removeItemFromCart, updateCartTotal } = this.props;
    removeItemFromCart(data);
    updateCartTotal();
  }

  onChange(e, data) {
    const {id, value } = e.target;
    const { updateItemQuantity, updateCartTotal } = this.props;
    updateItemQuantity({id, value});
    updateCartTotal();
  }

  handleOrder() {
    const { cartTotalPrice, cart } = this.props.order;
    const { makeOrder } = this.props;
    const menuItems = [];
    cart.forEach(item => {
      menuItems.push(
        {
          menuId: item.id,
          quantity: item.quantity
        }
      )
    });

    if (!Array.isArray(menuItems) || menuItems.length > 0){
      makeOrder({
        userId: this.props.auth.user.id,
        orderAmount: cartTotalPrice,
        menu: [...menuItems]
        });
        Notify.notifySuccess('Checkout Successful');
    }

    if (menuItems.length === 0) {
      Notify.notifyError('Cart is empty');
    }
  }

  generateCart() {
    const { cart } = this.props.order;
    return (
      <div id="sec">
        {cart.map(item => (
          <CheckoutCards onChange={this.onChange} onClick={ ((e) => this.handleClick(e, item)) } item={item} />
        ))}
      </div>
    )
  }
  render() {
    const { cartTotalPrice } = this.props.order;
    return (
      <section className="order">
        <div className="container">
          <div className="fullsection">
            <h3>Your Food Selection</h3>
            <div className="checkout">
              <p><label htmlFor="price">Sum Total : </label><span id="total">&#8358;{cartTotalPrice}</span></p>
              <p><input 
                onClick={this.handleOrder } 
                id="checkout" className="button" type="button" name="" 
                value={this.props.auth.isLoading ? 'Processing' : 'Checkout'} /></p>
            </div>
            {
              this.generateCart()
            }
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  order: state.order,
});

export default connect(mapStateToProps, { removeItemFromCart, updateCartTotal, updateItemQuantity, makeOrder })(Checkout);