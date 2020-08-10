import React,{ useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../contexts/UserContext'
const token = localStorage.getItem('etherpm_user_token')


const RightUL = (props) => {
  const { profile } = useContext(UserContext)

  const getLogout = (e) => {
    localStorage.removeItem('etherpm_user_token')
    window.location = '/login'
  }

  return(
    <ul className="navbar-nav ml-auto">
      {!token && <li className="nav-item">
        <Link className="nav-link" to="/login">LOG IN</Link>
      </li>}
      {!token && <li className="nav-item">
        <Link className="nav-link" to="/register">SIGN UP</Link>
      </li>}
      {profile && <li className="dropdown nav-item">
        <p className="pointer dropdown-toggle"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {profile.data.name}
        </p>
        <div className="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
          <Link to="/profile" className="dropdown-item nav-link">Profile</Link>
          <p onClick={getLogout} className="dropdown-item nav-link">Logout</p>
        </div>
      </li>}
    </ul>
  )
}
export default RightUL
