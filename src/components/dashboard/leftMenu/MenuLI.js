import React from 'react'
import MenuLink from './MenuLink'
import MenuUL from './MenuUL'

const MenuLI = ({ id, title, link, icon, items, active }) => {
  return (
    <li className="nav-item">
      <MenuLink icon={icon}  title={title} link={link} active={active} items={items} id={id}/>
      {items && items.length > 0 &&
        <div className={`sub-menu ${!active ?'d-none': ''}`}>
          <MenuUL menu={items}/>
        </div>
      }
    </li>
  )
}

export default MenuLI
