import React from 'react'


const items = [
  {id: 1,name: 'Wallet',icon: 'bx bx-wallet-alt',title: 'Wallet'},
  {id: 2,name: 'Trades',icon: 'bx bx-trending-up',title: 'Trades'},
  {id: 3,name: 'OrderManagement',icon: 'bx bx-bar-chart-alt-2',title: 'Order Management'},
  {id: 4,name: 'TransactionHistory',icon: 'bx bx-history',title: 'Transaction History'},
  {id: 5,name: 'Settings',icon: 'bx bx-cog',title: 'Settings'},
  {id: 6,name: 'Refferal',icon: 'bx bx-user-plus',title: 'Referral'}
]



const ListItem = ({ name, title, page, setPage, icon}) => {
  return(
    <li onClick={e => setPage(name)} className="nav-item">
      <p className={`nav-link ${page === name ? 'active': ''}`}>
        <i className={`${icon} mx-2`}></i>
      {title}</p>
    </li>
  )
}

const LeftMenu = ({ setPage, page, profile }) => {

  return(
    <div className="col-3 left-menu">
      <div className="row align-items-center w-100 left-menu-wrapper">

        <div className='col-12 text-light py-2 item-1'>
          <div>
            <h3 className="mb-0">{profile.name}</h3>
            <small className="">{profile.email}</small>
          </div>
        </div>

        <ul className="col-12 nav flex-column px-3 px-lg-5 w-100 item-2">
          {items.map(i => <ListItem key={i.id} page={page} {...i} setPage={setPage}/>)}
        </ul>

      </div>
    </div>
  )
}


export default LeftMenu
