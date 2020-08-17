import React from 'react'
import ContentLayout from '../ContentLayout'
import Head from './Head'
import Item from './Item'


const Wallet = (props) => {
  return(
    <ContentLayout>
      <div className="filter py-4">
        <div className="d-flex justify-content-end">
          <button className="btn btn-info btn-lg px-5" type="button">Hide zero balances</button>
        </div>
      </div>
      <div className="list-group">
        <Head />
        {[1,2,3,4,5,6,7,8,9,10,11,12].map(i => <Item key={i} />)}
      </div>
    </ContentLayout>
  )
}
export default Wallet
