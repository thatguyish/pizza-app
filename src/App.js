import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from 'react-router-dom';
import Home from './components/orders.js';

class App extends Component {


  render() {
    return (
      <div className="App">
        <header>
          <nav class="navTop">
            <ul>
              <li>
                <Link to="/orders">Orders</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link class="btn-" to="/contact">Contact us</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Outlet />
        </main>
        <footer>
          <p>&copy; Copyright 2018</p>
        </footer>
      </div>
    );
  }
}

export default App;
