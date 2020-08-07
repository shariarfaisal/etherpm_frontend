import React from 'react'
import { Link } from 'react-router-dom'


const Company = (props) => {
  return(
    <div className="col-md-2 item">
      <h2 className="f-title">Company</h2>
      <ul>
        <li><Link to="/">News</Link></li>
        <li><Link to="/">Guides</Link></li>
        <li><Link to="/">Support</Link></li>
        <li><Link to="/">Token Listing</Link></li>
      </ul>
    </div>
  )
}

export default Company
