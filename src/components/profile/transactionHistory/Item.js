import React from 'react'

const Item = (props) => {
  return(
    <div className="list-group-item d-flex my-2 text-light border-0" style={{fontSize: '13px',background: 'inherit'}}>
      <div className="" style={{width: '20%'}}>USD/BTC</div>
      <div className="" style={{width: '15%'}}>34,56</div>
      <div className="" style={{width: '10%'}}>4567</div>
      <div className="" style={{width: '10%'}}>- - -</div>
      <div className="" style={{width: '10%'}}>Some</div>
      <div className="" style={{width: '15%'}}>20-4-20</div>
      <div className="" style={{width: '10%'}}>- - -</div>
      <div className="text-success" style={{width: '10%'}}>Active</div>
    </div>
  )
}
export default Item
