import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './sass/style.scss'
import axios from 'axios'

const tokenHandler = async (token) => {
  axios.defaults.headers.common['etherpm_user_token'] = token
}

const token = localStorage.getItem('etherpm_user_token')
if(token){
  tokenHandler(token)
}

ReactDOM.render(
  <App />,
   document.getElementById('root')
);
