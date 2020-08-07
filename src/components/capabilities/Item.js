import React from 'react'

const Item = (props) => {
  return(
    <div className="col-md-6 col-xl-4 item">
      <div className="item-wrapper">
        <div className="icon">
          <img  src="img/exchange.jpg" alt="" />
        </div>
        <div className="context">
          <h5 className="title">Trading Features</h5>
          <span className="divider"></span>
          <p className="desc">Margin Trading, Professional tools and support, High Trading Chart</p>
        </div>
      </div>
    </div>
  )
}

export default Item
