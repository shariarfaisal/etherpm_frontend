import React from 'react'
import DashboardLayout from '../../components/dashboard/DashboardLayout'
import Body from '../../components/dashboard/admins/Admins'
import AdminContextProvider from '../../components/dashboard/contexts/AdminContext'


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
