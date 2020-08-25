import React,{ useContext } from 'react'
import './leftMenu.scss'
import MenuUL from './MenuUL'
import { DashboardContext } from '../contexts/DashboardContext'

// const menu = [
//   {title: 'Home',icon: 'bx bx-home',link: '/',active: true},
//   {title: 'Consumer',icon: 'bx bx-user',link: '',items:[
//     {title: 'All',icon: 'bx bx-list-ul',link: '/dashboard/consumers'}
//   ]},
//   {title: 'Admins',icon: 'bx bx-group',link: '',items:[
//     {title: 'All',icon: 'bx bx-list-ul',link: '/dashboard/admins'},
//     {title: 'Profile',icon: 'bx bx-user',link: '/profile'},
//   ]},
// ]

const getLogout = () => {
  localStorage.removeItem('etherpm_admin_token')
  window.location = '/dashboard/login'
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
