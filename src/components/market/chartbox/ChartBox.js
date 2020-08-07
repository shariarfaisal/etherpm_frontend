import React from 'react'
import ChartBoxItem from './ChartBoxItem'


const ChartBox = (props) => {
  return(
    <div className="chart-box my-5">
      <div className="row mx-0">

        {[1,2,3,4].map(i => <ChartBoxItem key={i} />)}

      </div>
    </div>
  )
}
export default ChartBox
