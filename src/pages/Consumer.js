import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import ConsumerBody from '../components/consumers/Consumer'
import ConsumerContextProvider from '../components/contexts/ConsumerContext'


const Consumer = (props) => {
  return(
    <ConsumerContextProvider>
      <DashboardLayout>
        <ConsumerBody />
      </DashboardLayout>
    </ConsumerContextProvider>
  )
}
export default Consumer
