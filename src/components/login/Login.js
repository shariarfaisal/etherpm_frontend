import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Login = (props) => {
  return(
    <LoginStyle className="login">
      <div className="wrapper">
        <div className="row justify-content-center align-items-center mx-0">

          {/* Form Container */}
          <form className="form col-sm-8 col-md-5 col-lg-4 col-xl-3 rounded">
            <h2 className="text-center py-2">Log In</h2>
            {/* Error Message */}
            <div className="py-3 text-center text-danger border bg-light rounded">Invalid Cridential!</div>

            <div className="form-group mb-5 mt-3">
              <label htmlFor="email">Email</label>
              <input id="email" className="form-control" type="email" placeholder="Email" />
            </div>
            <div className="form-group mb-5">
              <label htmlFor="password">Password</label>
              <input id="password" className="form-control" type="password" placeholder="Password" />
            </div>
            <div>
              <button className="btn btn-lg btn-block btn-info" type="button">Log In</button>
              <div className="foot my-3 d-flex justify-content-between">
                <span className="forgot">Forgot Password?</span>
                <div className="no-account text-muted">Have no account yet? <Link to="/register" className="text-warning"> Register</Link></div>
              </div>
            </div>
          </form>


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
    font-size: 1.6rem;
    height: 4rem;
  }

  .btn{
    font-size: 1.7rem;
  }
`
export default Login
