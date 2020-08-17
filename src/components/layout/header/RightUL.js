import React from 'react'
import { Link } from 'react-router-dom'
const token = localStorage.getItem('etherpm_user_token')


const RightUL = (props) => {
  return(
    <ul className="navbar-nav ml-auto">
      {!token && <li className="nav-item">
        <Link className="nav-link" to="/login">LOG IN</Link>
      </li>}
      {!token && <li className="nav-item">
        <Link className="nav-link" to="/register">SIGN UP</Link>
      </li>}
      {token && <li className="nav-item">
        <Link className="nav-link" to="/profile"><i className="fa fa-user"></i> Profile</Link>
      </li>}
    </ul>
  )
}
export default RightUL
