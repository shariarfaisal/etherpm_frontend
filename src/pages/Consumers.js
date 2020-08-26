import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import Body from '../components/consumers/Consumers'
import ConsumerContextProvider from '../components/contexts/ConsumerContext'


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
