import React from 'react'
import { Link } from 'react-router-dom'


const RightUL = (props) => {
  return(
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/login">LOG IN</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/register">SIGN UP</Link>
      </li>
    </ul>
  )
}
export default RightUL
