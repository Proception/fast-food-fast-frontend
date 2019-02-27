import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from '../Routes.jsx'
import NavMenu from '../Menus/NavMenu.jsx'
import Footer from '../Menus/Footer.jsx'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="main-container">
          <NavMenu/>
          <Routes/>
          <Footer/>
        </div>
      </Router>
    )
  }
}
