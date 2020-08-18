import React from 'react'

const Item = (props) => {
  return(
    <div className="list-group-item d-flex my-2 text-light border-0" style={{fontSize: '13px',background: 'inherit'}}>
      <div className="" style={{width: '40%'}}>
        <img src="./img/btc.png" width="20px" height="20px" alt="BTC" />
        <span>BTC</span>
      </div>
      <div className="" style={{width: '15%'}}>0.00000</div>
      <div className="" style={{width: '15%'}}>0.00000</div>
      <div className="" style={{width: '15%'}}>0.00000</div>
      <div className="d-flex" style={{width: '15%'}}>
        <button type="button" className="mx-2 btn btn-success">Deposit</button>
        <button type="button" className="mx-2 btn btn-info">Withdraw</button>
      </div>
    </div>
  )
}
export default Item
