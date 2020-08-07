import React from 'react'
import { Link } from 'react-router-dom'


const LeftUL = (props) => {
  return(
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="#">WALLET</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">TRADES</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" to="#">MARKET</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" to="#">AIRDROP</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" to="#">TOKEN LISTING</Link>
      </li>
    </ul>
  )
}


export default LeftUL
