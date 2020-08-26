import React from 'react'

const Navigation = ({ setUpdateMode, setPasswordMode }) => {

  const infoMode = () => {
    setPasswordMode(false)
    setUpdateMode(true)
  }

  const passMode = () => {
    setPasswordMode(true)
    setUpdateMode(false)
  }

  return (
    <nav className="d-flex justify-content-end">
      <ul className="nav">
        <li onClick={infoMode} className="nav-item">
          <p className="nav-link pointer"><i className="bx bx-edit"></i> Update Info</p>
        </li>
        <li onClick={passMode} className="nav-item">
          <p className="nav-link pointer"><i className="bx bx-shield"></i> Update Password</p>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
