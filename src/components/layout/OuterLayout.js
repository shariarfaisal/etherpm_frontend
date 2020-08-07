import React,{ Fragment } from 'react'
import Header from './header/Header'
import Footer from './Footer'


const OuterLayout = ({ children }) => {
  return(
    <Fragment>
      <Header leftul="false" />
        { children }
      <Footer />
    </Fragment>
  )
}
export default OuterLayout
