import React from 'react'
import styled from 'styled-components'
import SignupForm from './SignupForm'


const Signup = (props) => {
  return(
    <RegisterStyle className="login">
      <div className="wrapper">
        <div className="row justify-content-center align-items-center mx-0">
          <SignupForm />
        </div>
      </div>
    </RegisterStyle>
  )
}

const RegisterStyle = styled.div`
  min-height: 88vh;
  font-family: 'ubuntu',sans-sarif;
  .form{
    padding: 3rem;
    box-shadow: 0 2px 7px #c9c9c9;

    .invalid{
      font-size: 1.1rem;
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
    }
  }

  label{
    font-size: 1.3rem;
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
export default Signup
