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
    }, () => {}
    )
  }

  generateForms(){
    const InputData = [
      {
        type: 'email',
        name: 'email',
        value: this.state.loginUser.email,
        placeholder: 'Email',
      },
      {
        type: 'password',
        name: 'password',
        value: this.state.loginUser.password,
        placeholder: 'Password',
      },
    ];

    return InputData.map(
      (item, index) => <p><Input
        key={index} type={ item.type } name ={ item.name }
        value={ item.value } placeholder= { item.placeholder }
        handleChange={ this.handleInput } myClass = {'reg-control'}/></p>,
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let loginData = this.state.loginUser;

    const { 
      email
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
                  {
                    this.generateForms()
                  }
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
