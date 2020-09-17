import React,{ useContext, useState, useEffect } from 'react'
import { BaseContext } from '../../contexts/BaseContext'
import LeftMenu from './LeftMenu'
import OrderManagement from './orderManagement/OrderManagement'
import Wallet from './wallet/Wallet'
import Trades from './trades/Trades'
import TransactionHistory from './transactionHistory/TransactionHistory'
import About from './settings/About'
import './profile.scss'
import { useHistory } from 'react-router-dom'

const pages = ['Wallet','Trades','OrderManagement','TransactionHistory','InviteFriends','Settings','Refferal']

const Info = (props) => {
  const [page,setPage] = useState('')
  const { profile } = useContext(BaseContext)
  const history = useHistory()

  useEffect(() => {
    if(!profile){
      history.push('/login')
    }else{
      const tab = new URL(document.location).searchParams.get('tab')
      if(tab){
        const p = pages.find(i => i.toLowerCase() === tab.toLowerCase())
        setPage(p)
      }else{
        changeURL(pages[0])
      }
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
    <div className="profile">
      <div className="wrapper">
        {profile && <div className="row mx-0 justify-content-between">
          <LeftMenu
            page={page}
            setPage={changeURL}
            profile={ profile }
          />
          {page === 'Wallet' && <Wallet />}
          {page === 'OrderManagement' && <OrderManagement />}
          {page === 'Trades' && <Trades />}
          {page === 'TransactionHistory' && <TransactionHistory />}
          {page === 'Settings' && <About />}
        </div>}
      </div>
    </div>
  )
}
export default Info
