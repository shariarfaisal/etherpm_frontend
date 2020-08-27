import React,{ useEffect } from 'react'
import Header from './header/Header'
import Footer from './Footer'
import { useHistory } from 'react-router-dom'
import UserContextProvider from '../../contexts/UserContext'

const OuterLayout = ({ children }) => {
    const history = useHistory()

    useEffect(() => {
      const token = localStorage.getItem('x-user-token')
      if(token){
        history.push('/')
      }
    },[])


  return(
    <UserContextProvider>
      <Header leftul="false" />
        { children }
      <Footer />
    </UserContextProvider>
  )
}
export default OuterLayout
