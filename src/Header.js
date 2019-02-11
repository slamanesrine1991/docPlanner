import React, { Component } from 'react';
import logo from './logo.svg';

class Header extends Component {
  render() {
    return <div className="nav-bar is-sticky">
        <div>
          <img src={logo} className="App-logo" alt="logo" /> 
        </div>     
        <div className="menu">
          <ul className="parent-menu">
            <li className="about-us" ><a href="#">About us</a></li>
            <li><a href="#">Career</a></li>
            <li className="dropdown"><a href="#">Departments</a>
              <div className="dropdown-content">
                <ul >
                  <li><a href="#">Marketing & PR</a></li>
                  <li><a href="#">Customer Success & Sales</a></li>
                  <li><a href="#">IT, Product, Design & UX</a></li>
                  <li><a href="#">Finance & Administration</a></li>
                  <li><a href="#">HR & more</a></li>
                </ul>
              </div>
              
            </li>
          </ul>
        </div>
      </div>
  }
}

export default Header;
