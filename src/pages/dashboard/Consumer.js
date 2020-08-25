import React from 'react'
import DashboardLayout from '../../components/dashboard/DashboardLayout'
import ConsumerBody from '../../components/dashboard/consumers/Consumer'
import ConsumerContextProvider from '../../components/dashboard/contexts/ConsumerContext'


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
