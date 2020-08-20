import React from 'react'

const Info = ({ name, email }) => (
  <div className="info col-7 pt-5">
    <h2><i style={{fontSize:'15px'}} className="bx bx-user mx-2 text-warning"></i>{name}</h2>
    <p><i style={{fontSize:'15px'}} className="bx bx-envelope mx-2 text-warning"></i>{email}</p>
  </div>
)

export default Info
