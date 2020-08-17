import React from 'react'

const Head = (props) => {
  return(
    <div className="head list-group-item d-flex my-2 text-light shadow" style={{fontSize: '13px',background: '#41606E',fontWeight: 'bold'}}>
      <div className="" style={{width: '20%'}}>Order ID</div>
      <div className="" style={{width: '20%'}}>Currency pair</div>
      <div className="" style={{width: '10%'}}>Price</div>
      <div className="" style={{width: '10%'}}>Filled</div>
      <div className="" style={{width: '10%'}}>Total</div>
      <div className="" style={{width: '15%'}}>Type</div>
      <div className="" style={{width: '15%'}}>Time</div>
    </div>
  )
}
export default Head
