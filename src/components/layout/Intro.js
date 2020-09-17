import React,{ useContext } from 'react'
import { Link } from 'react-router-dom'
import { BaseContext } from '../../contexts/BaseContext'

const Intro = (props) => {
  const { token } = useContext(BaseContext)
  return(
    <div className="intro">
      <div className="row mx-0 justify-content-center align-items-center intro-item">

        <div className="col-lg-6 text-center content">
          <h1 className="title text-white"> <span className="text-warning font-6">ETHERPM</span> - YOUR TRUSTED PARTNER</h1>
          <p className="quote">IN THE WORLD OF ETHEREUM BASED EXCHANGE</p>
          {!token && <div className="d-flex justify-content-center mt-5">
            <Link to="/login" className="button btn-yellow mx-2" type="button" name="button">Log In</Link>
            <Link to="/register" className="button btn-teal mx-2" type="button" name="button">Sign Up</Link>
          </div>}
        </div>
        
      </div>
    </div>
  )
}


export default Intro
