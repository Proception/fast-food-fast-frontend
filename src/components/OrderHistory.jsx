import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderHistoryCards from './OrderHistoryCards.jsx';
import { getUserOrders } from '../actions/orderActions';

export class OrderHistory extends Component {

  componentDidMount(){
    this.props.getUserOrders();
  }
  generateOrders(){

    const { userOrders } = this.props.order;
    userOrders.sort(function(a,b){
      return new Date(b.order_date) - new Date(a.order_date);
    });
    if (!Array.isArray(userOrders) || !userOrders.length) {
      return ( 
        <div class="container">
            <div class="old-order">
              User has not made any Order Yet
            </div>
          </div> )
    }else {
      return <OrderHistoryCards userOrders={userOrders}/>
    }
    
  }
  render() {
    return (
      <div>
        <section class="order">
          {
            this.generateOrders()
          }
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  order: state.order,
});

export default connect(mapStateToProps, { getUserOrders })(OrderHistory);