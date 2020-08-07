import React from 'react'

const Item = (props) => {
  return(
    <div className="col-md-4 col-xl-3 item">
      <div className="p-3 flex-center">
        <img src="img/low_prices2.jpg" alt="" />
        <div className="img-tag">
          <span>LESS</span>
          <span>FEE</span>
        </div>
      </div>
    </div>
  )
}

export default Item
