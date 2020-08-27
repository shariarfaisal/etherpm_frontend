import React,{ useEffect } from 'react'
import LeftMenu from './leftMenu/LeftMenu'
import { useHistory } from 'react-router-dom'
import AdminContextProvider from './contexts/AdminContext'
import DashboardContextProvider from './contexts/DashboardContext'


const DashboardLayout = ({ children }) => {

  const history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem('x-admin-token')
    if(!token){
      history.push('/login')
    }
  },[])


  return(
    <DashboardContextProvider>
      <AdminContextProvider>
        <div className="dashboard color2" style={{minHeight: '100vh'}}>
          <div className="row mx-0" style={{minHeight: '100vh'}}>
            <LeftMenu />
            <div className="col-md-8 col-lg-9 p-0">
              {children}
            </div>
          </div>
        </div>
      </AdminContextProvider>
    </DashboardContextProvider>
  )
}
export default DashboardLayout
