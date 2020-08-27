import React,{ useContext } from 'react'
import './leftMenu.scss'
import MenuUL from './MenuUL'
import { DashboardContext } from '../contexts/DashboardContext'


const getLogout = () => {
  localStorage.removeItem('x-admin-token')
  window.location = '/login'
}


const LeftMenu = (props) => {
  const { menu } = useContext(DashboardContext)
  return(
    <div className="left-menu col-md-4 col-lg-3 color1">
      <div className="header">
        <h3>EtherPM</h3>
      </div>
      <div className="menu">
        <MenuUL menu={menu}/>

        <div onClick={getLogout} className="nav-link">
          <i className="bx bx-log-out mx-2"></i>
          <span>Logout</span>
        </div>

      </div>
    </div>
  )
}
export default LeftMenu
