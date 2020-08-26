import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './sass/style.scss'
import axios from 'axios'

const tokenHandler = async (arg,token) => {
  try{
    const actionToken = await axios.post('/api/refresh',{token})
    if(actionToken){
      axios.defaults.headers.common[arg] = actionToken.data.data
    }
  }catch(err){
    localStorage.removeItem(arg)
  }
}

const adminToken = localStorage.getItem('etherpm_admin_token')
if(adminToken) tokenHandler('etherpm_admin_token',adminToken)

ReactDOM.render(
  <App />,
   document.getElementById('root')
);
