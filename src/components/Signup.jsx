import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  genericValidator, 
  emailValidator,
  passwordValidator,
  phoneNumberValidator
} from '../utils/CustomValidator';
import Input from './Forms/Input.jsx';
import Notify from '../utils/Notify';
import { makeSignupRequest, completeSignupRequest, signUpUser } from '../actions/authActions';

export class Signup extends Component {

  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: '',
        email: '',
        pnumber: '',
        password: '',
        cpassword: '',
      },
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  generateForms(){
    const InputData = [
      {
        type: 'email',
        name: 'email',
        value: this.state.newUser.email,
        placeholder: 'Email',
      },
      {
        type: 'text',
        name: 'name',
        value: this.state.newUser.name,
        placeholder: 'Full Name',
      },
      {
        type: 'number',
        name: 'pnumber',
        value: this.state.newUser.pnumber,
        placeholder: 'Phone Number',
      },
      {
        type: 'password',
        name: 'password',
        value: this.state.newUser.password,
        placeholder: 'Password',
      },
      {
        type: 'password',
        name: 'cpassword',
        value: this.state.newUser.cpassword,
        placeholder: 'Confirm Password',
      },
    ];

    return InputData.map(
      (item, index) => <p><Input
        key={index} type={ item.type } name ={ item.name }
        value={ item.value } placeholder= { item.placeholder }
        handleChange={ this.handleInput } myClass = {'reg-control'}/></p>,
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => {
      return {
        newUser: {
          ...prevState.newUser, [name]: value
        }
      }
    }, () => {}
    )
  }

  checkInput(userData){
    Object.entries(userData).forEach(
      ([key, value]) => {
        if (!genericValidator(value)) {
          if (key === 'cpassword') {
            Notify.notifyError('Please enter a confirm password');
            throw BreakException;
          }
          if (key === 'pnumber') {
            Notify.notifyError('Please enter a Phone Number');
            throw BreakException;
          }
          Notify.notifyError(`Please enter a valid ${key}`);
          throw BreakException;
        }
      }
    );
  }

  validateInput(email, pnumber, password, cpassword){
    if (!emailValidator(email)) {
      Notify.notifyError(`${email} is not a valid email`);
      throw BreakException;
    }
    if (!phoneNumberValidator(pnumber)) {
      Notify.notifyError(`${pnumber} is not a phone number`);
      throw BreakException;
    } 

    if (!passwordValidator(password, cpassword)) {
      Notify.notifyError('Passwords do not match');
      throw BreakException;
    }
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    const { 
      email,
      pnumber,
      password,
      cpassword
    } = userData;

    try {
      this.checkInput(userData);
      this.validateInput(email, pnumber, password, cpassword);
      this.props.signUpUser(userData);
    } catch (error) {
      
    }
  }

  render() {
    return (
      <section>
        <div class="container">
          <div id="wrapper">
            <h1>Enter Registration Details</h1>
            <div class="register">
              <div id="notif"></div>
              <form id="signupForm" noValidate onSubmit={this.handleFormSubmit}>
                {
                  this.generateForms()
                }
                <p><Input type={'submit'} disabled={this.props.auth.isLoading}
                  value={this.props.auth.isLoading ? 'Processing' : 'submit'}
                  myClass={'button'}
                /></p>
                <h5>Already have an account click <NavLink to="/login" >here</NavLink></h5>
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

export default connect(mapStateToProps, { makeSignupRequest, completeSignupRequest, signUpUser })(Signup);