import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './sass/style.scss'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/'

const tokenHandler = async (token) => {
  axios.defaults.headers.common['Authorization'] = "Bearer " + token
}

const token = localStorage.getItem('Authorization')
if(token){
  tokenHandler(token)
}

ReactDOM.render(
  <App />,
   document.getElementById('root')
);
