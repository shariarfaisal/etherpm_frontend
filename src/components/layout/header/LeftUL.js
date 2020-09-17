import React from 'react'
import { Link } from 'react-router-dom'


const LeftUL = (props) => {
  return(
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/wallet">WALLET</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/trades">TRADES</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/market">MARKET</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/airdrop">AIRDROP</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/tokenlisting">TOKEN LISTING</Link>
      </li>
    </ul>
  )
}


export default LeftUL
