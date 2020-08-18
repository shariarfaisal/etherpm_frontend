import React,{ Fragment } from 'react'
import { Link } from 'react-router-dom'
const token = localStorage.getItem('etherpm_user_token')


const RightUL = (props) => {

  const getSignout = e => {
    localStorage.removeItem('etherpm_user_token')
    window.location = '/'
  }

  return(
    <ul className="navbar-nav ml-auto">
      {!token && <Fragment>
        <li className="nav-item">
          <Link className="nav-link" to="/login">LOG IN</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">SIGN UP</Link>
        </li>
      </Fragment>}
      {token && <Fragment>
        <li className="nav-item">
          <Link className="nav-link" to="/profile"><i className="bx bx-user"></i> Profile</Link>
        </li>
        <li className="nav-item">
          <p onClick={getSignout} className="nav-link mb-0 pointer">signout<i className="bx bx-log-out"></i></p>
        </li>
      </Fragment>}
    </ul>
  )
}
export default RightUL
