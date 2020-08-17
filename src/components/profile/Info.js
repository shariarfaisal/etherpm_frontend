import React,{ useState, useEffect } from 'react'
import LeftMenu from './LeftMenu'
import OrderManagement from './orderManagement/OrderManagement'
import Wallet from './wallet/Wallet'
import Trades from './trades/Trades'
import TransactionHistory from './transactionHistory/TransactionHistory'
import About from './settings/About'

const pages = ['Wallet','Trades','OrderManagement','TransactionHistory','InviteFriends','Settings']

const Info = (props) => {
  const [page,setPage] = useState('')

  useEffect(() => {
    const tab = new URL(document.location).searchParams.get('tab')
    if(tab){
      const p = pages.find(i => i.toLowerCase() === tab.toLowerCase())
      setPage(p)
    }else{
      setPage(pages[0])
    }
  },[])

  const changeURL = (page) => {
    const url = new URL(document.location)
    url.searchParams.set('tab',page)
    setPage(page)
    window.history.pushState({},null,url.href)
    window.scrollTo(0,0)
  }

  return(
    <div className="profile" style={{fontFamily: 'ubuntu'}}>
      <div className="wrapper" style={{minHeight: '500px'}}>
        <div className="row mx-0 justify-content-between" style={{background: 'rgb(51 80 94)'}}>
          <LeftMenu setPage={changeURL}/>
          {page === 'Wallet' && <Wallet />}
          {page === 'OrderManagement' && <OrderManagement />}
          {page === 'Trades' && <Trades />}
          {page === 'TransactionHistory' && <TransactionHistory />}
          {page === 'Settings' && <About />}
        </div>
      </div>
    </div>
  )
}
export default Info
