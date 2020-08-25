import React from 'react'
import Body from '../../components/dashboard/login/Login'
import AdminContextProvider from '../../components/dashboard/contexts/AdminContext'

const Login = (props) => {
  return(
    <AdminContextProvider>
      <div className="login">
        <Body />
      </div>
    </AdminContextProvider>
  )
}
export default Login
