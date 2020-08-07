import React,{ Fragment } from 'react'
import Header from './header/Header'
import Intro from './Intro'
import FooterBox from './footerBox/FooterBox'
import Footer from './Footer'
import { useHistory } from 'react-router-dom'


const Layout = ({ children }) => {
  const { location } = useHistory()
  return(
    <Fragment>
      <Header />
      {location.pathname === '/' && <Intro />}
      { children }
      <FooterBox />
      <Footer />
    </Fragment>
  )
}
export default Layout
