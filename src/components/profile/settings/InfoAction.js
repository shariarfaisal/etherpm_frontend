import React from 'react'
 
const InfoAction = ({ updateURL }) => (
  <div className="col-5 border-left border-secondary">
    <ul className="nav flex-column text-warning" style={{fontSize:'14px'}}>
      <li onClick={e => updateURL('info')} className="nav-item"><p className="mb-0 nav-link pointer">Update Info</p></li>
      <li onClick={e => updateURL('password')} className="nav-item"><p className="mb-0 nav-link pointer">Change Password</p></li>
    </ul>
  </div>
)

export default InfoAction
