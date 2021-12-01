import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Orders from './components/orders';
import ContactUs from './components/contactus';
import AboutUs from './components/about';
import AddOrder from './components/addOrder';
import OrderTemplate from './components/ordertemplate';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditOrder from './components/editOrder';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >

          <Route path="orders" element={<OrderTemplate />} >
            <Route index element={<Orders />} />
            <Route path="add" element={<AddOrder />} />
            <Route path=":id" element={<EditOrder />} />
          </Route>

          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
