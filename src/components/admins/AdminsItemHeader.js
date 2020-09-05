import React from 'react'

const AdminsItemHeader = (props) => (
  <div className="list-group-item d-flex my-2 shadow border-0 rounded-0" style={{background: '#41606E',fontWeight: 'bold'}}>
    <div style={{width: '5%'}}>#</div>
    <div style={{width: '20%'}}>Name</div>
    <div style={{width: '20%'}}>Username</div>
    <div style={{width: '20%'}}>Email</div>
    <div style={{width: '20%'}}>Contact</div>
    <div style={{width: '20%'}}>Action</div>
  </div>
)

export default AdminsItemHeader
