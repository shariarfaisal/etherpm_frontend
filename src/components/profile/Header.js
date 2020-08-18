import React,{ useState } from 'react'
import LoadingComponent from '../loaders/LoadingComponent'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ConfirmModal from './Modal'


const Header = ({ profile }) => {
  const [show,setShow] = useState(false)

  const handleYes = e => {
    localStorage.removeItem('etherpm_user_token')
    window.location = '/login'
  }

  return(
    <Styling className="col-12" style={{height: '80px',background: '#546e7a'}}>
      {profile ? <div className="text-light d-flex justify-content-between align-items-center">
      <div>
        <p>{profile.email}</p>
      </div>

      <div className="">
        <ul className="nav">
          <li className="nav-item">
            <div onClick={() => setShow(true)} className="text-light nav-link text-center pointer">
              <div><i className="fa fa-sign-out-alt"></i></div>
              <div>Sign out</div>
            </div>
            <ConfirmModal show={show} setShow={setShow} handleYes={handleYes}>
              Are you sure you want to sign out?
            </ConfirmModal>
          </li>
        </ul>
      </div>
    </div>: <LoadingComponent styles={{height: '80px',marginBottom: '1.5rem',marginTop: '1.5rem',}}/>}
    </Styling>
  )
}

const Styling = styled.div`

`
export default Header
