import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from './Forms/Input.jsx';
import Notify from '../utils/Notify';
import {
  genericValidator, 
  emailValidator,
} from '../utils/CustomValidator';
import { loginUser } from '../actions/authActions';

export class Login extends Component {
	constructor(props) {
    super(props);

    this.state = {
      loginUser: {
        email: '',
        password: '',

      },
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => {
      return {
        loginUser: {
          ...prevState.loginUser, [name]: value
        }
      }
    }, () => console.log(this.state.loginUser)
    )
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let loginData = this.state.loginUser;

    const { 
      email,
      password
    } = loginData;

    try {
      Object.entries(loginData).forEach(
        ([key, value]) => {
          if (!genericValidator(value)) {
            Notify.notifyError(`Please enter a valid ${key}`);
            throw BreakException;
          }
        }
      );

      if (!emailValidator(email)) {
        Notify.notifyError(`${email} is not a valid email`);
        throw BreakException;
      }

      this.props.loginUser(loginData);
    } catch (error) {
      
    }
  }
	render() {
		return (
			<section>
				<div className="container">
					<div id="wrapper">
						<h1>Enter Login Details</h1>
						<div className="login">
							<div id="notif"></div>
							<form id="loginForm" noValidate onSubmit={this.handleFormSubmit}>
								<p><Input type={'email'} name={'email'}
										value={this.state.loginUser.email} placeholder={'Email'}
										handleChange={this.handleInput} myClass={'reg-control'}
									/></p>
								<p><Input type={'password'} name={'password'}
										value={this.state.loginUser.password} placeholder={'Password'}
										handleChange={this.handleInput} myClass={'reg-control'}
									/></p>
								<p><Input id="login" type={'submit'} disabled={this.props.auth.isLoading}
                  value={this.props.auth.isLoading ? 'Processing' : 'submit'}
                  myClass={'button'}
                /></p>
								<h5>Dont have an account click <NavLink to="/signup" >here</NavLink></h5>
							</form>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loginUser })(Login);
