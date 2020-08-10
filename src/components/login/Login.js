import React from 'react'
import styled from 'styled-components'
import LoginForm from './LoginForm'


const Login = (props) => {

  return(
    <LoginStyle className="login">
      <div className="wrapper">
        <div className="row justify-content-center align-items-center mx-0">

          <LoginForm />

        </div>
      </div>
    </LoginStyle>
  )
}

const LoginStyle = styled.div`
  min-height: 88vh;
  font-family: 'ubuntu',sans-sarif;
  .form{
    padding: 3rem 3rem 5rem 3rem;
    margin: 8rem 0 5rem 0;
    box-shadow: 0 2px 7px #c9c9c9;

    label{
      font-size: 1.2rem;
    }

    .foot{
      font-size: 1.3rem;
      .forgot{
        cursor: pointer;
        text-decoration: underline;

        &:hover{
          color: black;
        }
      }

      .no-account span{
        cursor: pointer;
        &:hover{
          text-decoration: underline;
        }
      }
    }
  }
  .form-control{
    font-size: 1.5rem;
    height: 4rem;
    border-color: #e2e2e2d4;

    &:focus{
      box-shadow: none;
      border-color: #00c5df !important;
    }
  }

  .btn{
    font-size: 1.7rem;
  }
`
export default Login
