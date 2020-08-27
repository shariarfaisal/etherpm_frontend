import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './sass/style.scss'
import axios from 'axios'


const tokenHandler = (token) => {
  axios.defaults.headers.common['x-admin-token'] = token
}

const token = localStorage.getItem('x-admin-token')
if(token) tokenHandler(token)

ReactDOM.render(
  <App />,
   document.getElementById('root')
);
