import React,{ Fragment, useEffect } from 'react'
import Header from './header/Header'
import Intro from './Intro'
import FooterBox from './footerBox/FooterBox'
import Footer from './Footer'
import { useHistory } from 'react-router-dom'
import UserContextProvider from '../../contexts/UserContext'


const Layout = ({ children }) => {
  const { location, push } = useHistory()

  useEffect(() => {
    const token = localStorage.getItem('etherpm_user_token')
    if(!token){
      push('/login')
    }
  },[])

  return(
    <UserContextProvider>
      <Fragment>
        <Header />
        {location.pathname === '/' && <Intro />}
        { children }
        <FooterBox />
        <Footer />
      </Fragment>
    </UserContextProvider>
  )
}
export default Layout
