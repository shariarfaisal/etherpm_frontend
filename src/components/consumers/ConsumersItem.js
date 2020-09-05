import React from 'react'
import { Link } from 'react-router-dom'

const ConsumersItem = ({ name, email, refferalID, _id, i}) => {
  return(
    <div className="list-group-item d-flex my-2 border-0 rounded-0" style={{fontSize: '13px',background:'inherit'}}>
      <div style={{width: '5%'}}>{i+1}</div>
      <div style={{width: '30%'}}>{name}</div>
      <div style={{width: '25%'}}>{email}</div>
      <div style={{width: '20%'}}>{refferalID? refferalID: '- - -'}</div>
      <div style={{width: '20%'}}>
        <Link to={`/consumers/${_id}`} className="btn btn-info px-3 mx-2">view</Link>
      </div>
    </div>
  )
}
export default ConsumersItem
