import React from 'react'

const OrderItem = (props) => {
  return(
    <div className="list-group-item d-flex my-2 text-light border-0" style={{fontSize: '13px',background: 'inherit'}}>
      <div className="" style={{width: '10%'}}>#9848</div>
      <div className="" style={{width: '10%'}}>USD/BTC</div>
      <div className="" style={{width: '10%'}}>34,56</div>
      <div className="" style={{width: '10%'}}>4567</div>
      <div className="" style={{width: '10%'}}>- - -</div>
      <div className="" style={{width: '10%'}}>Some</div>
      <div className="" style={{width: '10%'}}>20-4-20</div>
      <div className="" style={{width: '10%'}}>- - -</div>
      <div className="text-success" style={{width: '10%'}}>Active</div>
      <div className="d-flex" style={{width: '10%'}}>
        <button type="button" className="mx-2 btn btn-success">One</button>
        <button type="button" className="mx-2 btn btn-info">Two</button>
      </div>
    </div>
  )
}
export default OrderItem
