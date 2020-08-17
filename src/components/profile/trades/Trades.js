import React from 'react'
import ContentLayout from '../ContentLayout'
import Filter from './Filter'
import Head from './Head'
import Item from './Item'

const Trades = (props) => {
  return(
    <ContentLayout>
      <Filter />
      <div className="list-group">
        <Head />
        {[1,2,3,4,5,6,7,8,9,10].map(i => <Item key={i} />)}
      </div>
    </ContentLayout>
  )
}
export default Trades
