import React from 'react'
import DashboardLayout from '../../components/dashboard/DashboardLayout'
import Body from '../../components/dashboard/consumers/Consumers'
import ConsumerContextProvider from '../../components/dashboard/contexts/ConsumerContext'


const Consumers = (props) => {
  return(
    <ConsumerContextProvider>
      <DashboardLayout>
        <Body />
      </DashboardLayout>
    </ConsumerContextProvider>
  )
}
export default Consumers
