import React from 'react'

const FirstItem = (props) => {
  return(
    <div className="col-md-6 col-xl-4 item-first">
      <div className="features-wrapper p-4 pl-5">
        <h2 className="title"> <span className="text-warning">ETHERPM</span> FEATURES</h2>
        <div className="divider"></div>
        <div className="flex-center">
          <img width="150px" className="feature-logo" src="img/trading.png" alt="" style={{clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"}} />
        </div>
      </div>
    </div>
  )
}


export default FirstItem
