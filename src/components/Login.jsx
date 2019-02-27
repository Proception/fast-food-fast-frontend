import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Login extends Component {
    render() {
      return (
        <section>
				<div class="container">
					<div id="wrapper">
					<h1>Enter Login Details</h1>
						<div class="login">
							<div id="notif"></div>
							<form id="loginForm" novalidate>
								<p><input placeholder="Email" value="" type="email" name="email"/></p>
								<p><input placeholder="Password" value="" type="password" name="pass"/></p>
								<p><input id="login" class="button" type="button" name="" value="Login" /></p>
								<h5>Dont have an account click <NavLink to="/signup" >here</NavLink></h5>
							</form>
						</div>
					</div>
				</div>
			</section>
      )
    }
  }
