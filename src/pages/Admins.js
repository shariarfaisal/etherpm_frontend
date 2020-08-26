import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import Body from '../components/admins/Admins'
import AdminContextProvider from '../components/contexts/AdminContext'


const Admins = (props) => {
  return(
    <AdminContextProvider>
      <DashboardLayout>
        <Body />
      </DashboardLayout>
    </AdminContextProvider>
  )
}
export default Admins
