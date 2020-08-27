import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import AdminBody from '../components/admins/Admin'
import AdminContextProvider from '../components/contexts/AdminContext'


const Admins = (props) => {
  return(
    <AdminContextProvider>
      <DashboardLayout>
        <AdminBody />
      </DashboardLayout>
    </AdminContextProvider>
  )
}
export default Admins
