import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Intro = (props) => {
  return(
    <IntroStyle>
      <div className="row mx-0 justify-content-center align-items-center intro-item">
        <div className="col-lg-6 text-center content">
          <h1 className="title text-white"> <span className="text-warning font-6">ETHERPM</span> - YOUR TRUSTED PARTNER</h1>
          <p className="quote">IN THE WORLD OF ETHEREUM BASED EXCHANGE</p>
          <div className="d-flex justify-content-center mt-5">
            <Link to="/login" className="button btn-yellow mx-2" type="button" name="button">Log In</Link>
            <Link to="/register" className="button btn-teal mx-2" type="button" name="button">Sign Up</Link>
          </div>
        </div>
      </div>
    </IntroStyle>
  )
}

const IntroStyle = styled.section`
  margin-top: -8rem;
  color: #ffffff;
  height: 500px;
  background: #131313;
  font-family: $font-ubuntu;

  &-item{
    height: 100%;

    .content{
      font-family: monospace;
      .title{
        font-size: 3rem;
      }
      .quote{
        font-size: 1.8rem;
        color: $white;
      }
    }
  }
`

export default Intro
