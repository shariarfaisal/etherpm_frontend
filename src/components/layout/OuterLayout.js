import React,{ Fragment, useEffect, useContext } from 'react'
import Header from './header/Header'
import Footer from './Footer'
import { useHistory } from 'react-router-dom'
import { BaseContext } from '../../contexts/BaseContext'


const OuterLayout = ({ children }) => {
    const history = useHistory()
    const { token } = useContext(BaseContext)

    useEffect(() => {
      if(token){
        history.push('/')
      }
    },[])


  return(
    <Fragment>
      <Header leftul="false" />
        { children }
      <Footer />
    </Fragment>
  )
}
export default OuterLayout
