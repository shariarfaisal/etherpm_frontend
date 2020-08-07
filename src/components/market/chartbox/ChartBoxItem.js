import React from 'react'

const ChartBoxItem = (props) => {
  return(
    <div className="col-md-6 col-lg-4 col-xl-3 chart-box-item my-2">
      <div className="p-3 blue-grey-l-4 border shadow-sm rounded wrapper">
        <div className="content">
          <h5 className="title">ETH/USDT</h5>
          <div className="up">
            <span className="text-green-d">97,838.23</span>
            <span className="text-dark">$790.42</span>
          </div>
          <div className="down">
            <span className="text-danger">-3.45%</span>
            <span className="text-dark">Vol 839459443.434 USDT</span>
          </div>
        </div>
        <div className="chart-canvas">

        </div>
      </div>
    </div>
  )
}
export default ChartBoxItem
