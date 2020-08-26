import React from 'react'
import Body from '../components/login/Login'
import AdminContextProvider from '../components/contexts/AdminContext'

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
