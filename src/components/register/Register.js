import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Signup = (props) => {
  return(
    <RegisterStyle className="login">
      <div className="wrapper">
        <div className="row justify-content-center align-items-center mx-0">

          {/* Form Container */}
          <form className="form col-sm-8 col-md-5 col-lg-4 col-xl-3 rounded">
            <h1 className="text-center py-2 mb-5">Create a free account</h1>
            <div className="form-group mb-5 mt-3">
              <label htmlFor="email">Email</label>
              <input id="email" className="form-control" type="email" placeholder="Email" />
            </div>
            <div className="form-group mb-5">
              <label htmlFor="password">Password</label>
              <input id="password" className="form-control" type="password" placeholder="Password" />
            </div>
            <div className="form-group mb-5">
              <label htmlFor="refferal">Refferal ID (Optional)</label>
              <input id="refferal" className="form-control" type="text" placeholder="Refferal ID" />
            </div>
            <div className="form-group mb-5 d-flex align-items-center pl-3">
              <input type="checkbox" class="form-check-input bg-warning" id="exampleCheck1" />
              <label className="form-check-label ml-3" for="exampleCheck1">I agree with the <Link to="/termsandconditions" className="text-warning">Terms and Conditions</Link></label>
            </div>
            <div>
              <button className="btn btn-lg btn-block btn-info" type="button">Register</button>
              <div className="foot my-3 d-flex justify-content-between">
                <div className="text-muted">Already have an account? <Link to="/login" className="text-warning">Login</Link></div>
              </div>
            </div>
          </form>


        </div>
      </div>
    </RegisterStyle>
  )
}

const RegisterStyle = styled.div`
  min-height: 88vh;
  font-family: 'ubuntu',sans-sarif;
  .form{
    padding: 3rem 3rem 5rem 3rem;
    margin: 5rem 0;
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
    }
  }

  label{
    font-size: 1.4rem;
  }

  .form-control{
    font-size: 1.6rem;
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
