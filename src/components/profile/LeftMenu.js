import React,{ useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../contexts/UserContext'

const items = [
  {id: 1,name: 'Wallet',icon: 'bx bx-wallet-alt',title: 'Wallet'},
  {id: 2,name: 'Trades',icon: 'bx bx-trending-up',title: 'Trades'},
  {id: 3,name: 'OrderManagement',icon: 'bx bx-bar-chart-alt-2',title: 'Order Management'},
  {id: 4,name: 'TransactionHistory',icon: 'bx bx-history',title: 'Transaction History'},
  {id: 5,name: 'Settings',icon: 'bx bx-cog',title: 'Settings'},
  {id: 6,name: 'Refferal',icon: 'bx bx-user-plus',title: 'Referral'}
]


const ListItem = ({ name, title, page, setPage, icon}) => {
  console.log(page,name);
  return(
    <li onClick={e => setPage(name)} className="nav-item">
      <p className={`nav-link ${page === name ? 'active': ''}`}>
        <i className={`${icon} mx-2`}></i>
      {title}</p>
    </li>
  )
}

const LeftMenu = ({ setPage, page }) => {
  const { profile } = useContext(UserContext)
  return(
    <Styling className="col-3" style={{minHeight: '500px',background: '#41606E',position: 'relative'}}>
      <div className="row align-items-center" style={{minHeight: '500px',position: 'absolute'}}>
        {profile && <div  style={{background: 'rgb(51, 80, 94)'}} className="col-12 text-light py-2">
          <h3 className="mb-0">{profile.name}</h3>
          <small className="">{profile.email}</small>
        </div>}
        <ul className="col-12 nav flex-column px-3 px-lg-5 w-100">
          {items.map(i => <ListItem key={i.id} page={page} {...i} setPage={setPage}/>)}
        </ul>
      </div>
    </Styling>
  )
}

const Styling = styled.div`
  .nav-item{
    .nav-link{
      cursor: pointer;
      color: #ffffff;
      &:hover{
        background: #33505f;
        border-radius: 2px;
        color: #f8f9fad1;
      }
    }

    .active{
      background: #33505f;
      border-radius: 2px;
      color: #f8f9fad1;
    }
  }
`

export default LeftMenu
