import React from 'react'

const OrderHead = (props) => {
  return(
    <div className="head list-group-item d-flex my-2 text-light shadow" style={{fontSize: '13px',background: '#41606E',fontWeight: 'bold'}}>
      <div className="" style={{width: '10%'}}>Order ID</div>
      <div className="" style={{width: '10%'}}>Currency pair</div>
      <div className="" style={{width: '10%'}}>Order Amount</div>
      <div className="" style={{width: '10%'}}>Price</div>
      <div className="" style={{width: '10%'}}>Filled</div>
      <div className="" style={{width: '10%'}}>Type</div>
      <div className="" style={{width: '10%'}}>Date</div>
      <div className="" style={{width: '10%'}}>Unfilled</div>
      <div className="" style={{width: '10%'}}>Status</div>
      <div className="" style={{width: '10%'}}>Actions</div>
    </div>
  )
}
export default OrderHead
