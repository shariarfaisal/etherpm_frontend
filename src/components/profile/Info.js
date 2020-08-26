import React from 'react'

const Info = ({ name, username, email, contact, _id }) => {
  return (
    <div className="info">
      <div className="d-flex my-2 py-2">
        <span className="w-50">Name: </span>
        <span className="w-50">{name}</span>
      </div>
      <div className="d-flex my-2 py-2">
        <span className="w-50">Username: </span>
        <span className="w-50">{username}</span>
      </div>
      <div className="d-flex my-2 py-2">
        <span className="w-50">Email: </span>
        <span className="w-50">{email}</span>
      </div>
      <div className="d-flex my-2 py-2">
        <span className="w-50">Contact: </span>
        <span className="w-50">{contact}</span>
      </div>
    </div>
  )
}

export default Info
