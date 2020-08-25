import React,{ useContext } from 'react'
import { DashboardContext } from '../contexts/DashboardContext'
import { Link } from 'react-router-dom'

const MenuLink = ({ id, title, link, icon, items, active }) => {
  const { activeMenuItem } = useContext(DashboardContext)

  return (
    link ?
      <Link  to={link} className={`nav-link mb-0 ${active ? 'active': ''}`}>
        <i className={`mx-2 ${icon}`}></i>
        <span>{title}</span>
      </Link>:
      <p onClick={e => activeMenuItem(id)} className={`nav-link mb-0 d-flex justify-content-between align-items-center ${active && link? 'active': ''}`}>
        <span><i className={`mx-2 ${icon}`}></i> {title}</span>
        {items && items.length > 0 && <i className={`bx bx-chevron-${active? 'down': 'right'}`}></i>}
      </p>
  )
}

export default MenuLink
