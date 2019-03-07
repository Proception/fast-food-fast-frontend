import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderCards from './OrderCards.jsx';
import OrderControls from './OrderControls.jsx';
import { getOrders } from '../actions/orderActions';

export class Orders extends Component {

  componentDidMount(){
    this.props.getOrders();
  }

  generateOrders(){
    const { orders } = this.props.order;
    orders.sort(function(a,b){
      return new Date(b.order_date) - new Date(a.order_date);
    });
    
    if (!Array.isArray(orders) || !orders.length) {
      return ( 
        <div class="new-order">
          <div class="order-details">
            There are no Orders
          </div>
        </div> )
    }else {
      return <OrderCards orders={orders}/>
    }
    
  }
  render() {
    return (
      <div>
        <OrderControls/>
        <section class="order">
          <div id="sec" class="container">
            {
              this.generateOrders()
            }
            <div class="pagination">
              <a href="#" >&laquo;</a>
              <a href="#" class="active">1</a>
              <a href="#">2</a>
              <a href="#">&raquo;</a>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  order: state.order,
});

export default connect(mapStateToProps, { getOrders })(Orders);