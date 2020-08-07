import React from 'react'
import { Link } from 'react-router-dom'


const Ranking = (prosp) => {
  return(
    <div className="col-md-2 item">
      <h2 className="f-title">RANKING</h2>
      <ul>
        <li><Link to="/">Coingecko</Link></li>
        <li><Link to="/">Coincodex</Link></li>
        <li><Link to="/">Coinmarketcap</Link></li>
      </ul>
    </div>
  )
}

export default Ranking
