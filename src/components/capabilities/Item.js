import React from 'react'

const Item = ({ img, title, desc }) => {
  return(
    <div className="col-md-6 col-xl-4 item">
      <div className="item-wrapper">
        <div className="icon">
          <img  src={img} alt="" />
        </div>
        <div className="context">
          <h5 className="title">{title}</h5>
          <span className="divider"></span>
          <p className="desc">{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Item
