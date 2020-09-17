import React from 'react'
import LoginForm from './LoginForm'
import './login.scss'

const Login = (props) => {
  return(
    <div className="login">
      <div className="wrapper">
        <div className="row justify-content-center align-items-center mx-0">

          <LoginForm />

        </div>
      </div>
    </div>
  )
}

export default Login
