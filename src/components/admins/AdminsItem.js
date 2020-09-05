import React from 'react'
import { Link } from 'react-router-dom'


const AdminsItem = ({ name, username, email, contact, _id, i }) => {
  return (
    <div className="list-group-item d-flex my-2 text-light border-0 rounded-0" style={{fontSize: '13px',background:'inherit'}}>
      <div style={{width: '5%'}}>{i+1}</div>
      <div style={{width: '20%'}}>{name}</div>
      <div style={{width: '20%'}}>{username}</div>
      <div style={{width: '20%'}}>{email}</div>
      <div style={{width: '20%'}}>{contact}</div>
      <div style={{width: '15%'}}>
        <Link to={`/admins/${_id}`} className="btn btn-info px-3 mx-2">view</Link>
      </div>
    </div>
  )
}

export default AdminsItem
