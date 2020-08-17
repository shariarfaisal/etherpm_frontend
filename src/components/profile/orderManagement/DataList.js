import React from 'react'
import OrderHead from './OrderHead'
import OrderItem from './OrderItem'

const DataList = (props) => {
  return(
    <div className="data-list">
      <div className="list-group">
        <OrderHead />
        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(i => <OrderItem key={i} />)}
      </div>
    </div>
  )
}
export default DataList
