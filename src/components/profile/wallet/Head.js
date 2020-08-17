import React from 'react'

const Head = (props) => {
  return(
    <div className="head list-group-item d-flex my-2 text-light shadow" style={{fontSize: '13px',background: '#41606E',fontWeight: 'bold'}}>
      <div className="" style={{width: '40%'}}>Symbol</div>
      <div className="" style={{width: '15%'}}>Total Value</div>
      <div className="" style={{width: '15%'}}>Available Valance</div>
      <div className="" style={{width: '15%'}}>Held for Orders</div>
      <div className="" style={{width: '15%'}}>Actions</div>
    </div>
  )
}
export default Head
