import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Signup extends Component {
    render() {
      return (
        <section>
        <div class="container">
          <div id="wrapper">
          <h1>Enter Registration Details</h1>
            <div class="register">
              <div id="notif"></div>
              <form id="signupForm" novalidate>
                <p><input class="reg-control" value="" placeholder="Email" type="email" name="email" /></p>
                <p><input class="reg-control" value="" placeholder="Full Name" type="text" name="name"/></p>
                <p><input class="reg-control" value="" placeholder="Phone number" type="number" name="pnumber"/></p>
                <p><input class="reg-control" value="" placeholder="Password" type="password" name="pass"/></p>
                <p><input class="reg-control" value="" placeholder="Confirm Password" type="password" name="cpass"/></p>
                <p><input class="button" id="signup" type="button" name="" value="Signup"/></p>
                <h5>Already have an account click <NavLink to="/login" >here</NavLink></h5>
              </form>
            </div>
          </div>
        </div>
      </section>
      )
    }
  }
