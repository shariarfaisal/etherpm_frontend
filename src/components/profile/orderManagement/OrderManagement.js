import React from 'react'
import ContentLayout from '../ContentLayout'
import Filter from './Filter'
import DataList from './DataList'

const OrderManagement = (props) => {
  return(
    <ContentLayout>
      <Filter />
      <DataList />
    </ContentLayout>
  )
}
export default OrderManagement
