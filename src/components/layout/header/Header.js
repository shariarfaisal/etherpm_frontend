import React from 'react'
import RightUL from './RightUL'
import LeftUL from './LeftUL'
import { Link } from 'react-router-dom'

const Nav = ({ leftul, rightul }) => {
  return(
    <header>
      <nav id="navbar" className="navbar navbar-expand-lg px-5">
        <Link className="navbar-brand text-warning" to="/">ETHERPM</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {leftul && leftul !== 'false' && <LeftUL />}
          {rightul && rightul !== 'false' && <RightUL />}
        </div>
      </nav>
    </header>
  )
}

Nav.defaultProps = {
  leftul: true,
  rightul: true
}

export default Nav
