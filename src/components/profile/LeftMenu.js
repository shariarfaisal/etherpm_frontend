import React from 'react'

const LeftMenu = ({ setPage }) => {
  return(
    <div className="col-3" style={{minHeight: '500px',background: '#41606E',position: 'relative'}}>
      <div className="d-flex align-items-center" style={{minHeight: '500px',position: 'absolute'}}>
        <ul className="nav flex-column px-3 px-lg-5 w-100">
          <li onClick={e => setPage('Wallet')} className="nav-item">
            <p className="text-light nav-link pointer"><i className="fas fa-wallet mx-2"></i>Wallet</p>
          </li>
          <li onClick={e => setPage('Trades')} className="nav-item">
            <p className="text-light nav-link pointer"><i className="fas fa-luggage-cart mx-2"></i>Trades</p>
          </li>
          <li onClick={e => setPage('OrderManagement')} className="nav-item">
            <p className="text-light nav-link pointer"><i className="fas fa-poll mx-2"></i>Order Management</p>
          </li>
          <li onClick={e => setPage('TransactionHistory')} className="nav-item">
            <p className="text-light nav-link pointer"><i className="fas fa-history mx-2"></i>Transaction History</p>
          </li>
          <li onClick={e => setPage('Settings')} className="nav-item">
            <p className="text-light nav-link pointer"><i className="fas fa-user-cog mx-2"></i>Settings</p>
          </li>
          <li onClick={e => setPage('InviteFriends')} className="nav-item">
            <p className="text-light nav-link pointer"><i className="fas fa-user-plus mx-2"></i>Referral</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default LeftMenu
