import React from 'react'
import MenuLI from './MenuLI'

const MenuUL = ({ menu }) => {
  return (
    <ul className="nav flex-column">
      {menu && menu.map((item,i) => <MenuLI key={i} {...item}/>)}
    </ul>
  )
}

export default MenuUL
