import React from 'react'

const Item = (props) => {
  return(
    <div className="list-group-item d-flex my-2 text-light border-0" style={{fontSize: '13px',background: 'inherit'}}>
      <div className="" style={{width: '20%'}}>#45493</div>
      <div className="" style={{width: '20%'}}>USD/BTC</div>
      <div className="" style={{width: '10%'}}>0.000</div>
      <div className="" style={{width: '10%'}}>0.000</div>
      <div className="" style={{width: '10%'}}>0.000</div>
      <div className="" style={{width: '15%'}}>- - -</div>
      <div className="" style={{width: '15%'}}>23-09-20</div>
    </div>
  )
}
export default Item
