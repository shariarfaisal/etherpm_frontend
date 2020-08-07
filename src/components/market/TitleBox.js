import React from 'react'
import { Link } from 'react-router-dom'


const TitleBox = (props) => {
  return(
    <div className="title-box d-flex justify-content-between">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="#">ETH</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">USDT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">EPM</Link>
        </li>
      </ul>
      <div className="search">
        <input type="text" className="form-control shadow-sm" placeholder="Search" />
      </div>
    </div>
  )
}
export default TitleBox
