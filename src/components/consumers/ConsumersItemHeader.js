import React from 'react'

const ConsumersItemHeader = (props) => {
  return(
    <div className="list-group-item d-flex my-2 shadow border-0 rounded-0" style={{background: '#41606E',fontWeight: 'bold'}}>
      <div style={{width: '5%'}}>#</div>
      <div style={{width: '30%'}}>Name</div>
      <div style={{width: '25%'}}>Email</div>
      <div style={{width: '20%'}}>Reffarel ID</div>
      <div style={{width: '20%'}}>Action</div>
    </div>
  )
}
export default ConsumersItemHeader
