import React,{ Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import { BaseContext } from '../../../contexts/BaseContext'


const RightUL = (props) => {
  const { getSignout, token } = useContext(BaseContext)

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
