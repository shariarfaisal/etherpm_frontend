import React from 'react'
import Thead from './Thead'
import Item from './Item'

const CurrencyTableView = (props) => {
  return(
    <div className="table-view my-5">
      <table className="table">
        <Thead />
        <tbody>
          {[1,2,3,4,5,6].map(i => <Item key={i} /> )}
        </tbody>
      </table>
    </div>
  )
}
export default CurrencyTableView
