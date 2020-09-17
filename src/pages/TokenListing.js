import React,{ useContext, useEffect } from 'react'
import Layout from '../components/layout/Layout'
import TokenListingBody from '../components/tokenListing/TokenListing'
import TokenListingContextProvider from '../contexts/TokenListingContext'
import { BaseContext } from '../contexts/BaseContext'
import { useHistory } from 'react-router-dom'


const TokenListing = (props) => {
  const { profile, getSignout } = useContext(BaseContext)
  const history = useHistory()


  useEffect(() => {
    if(!profile){
      getSignout()
      history.push('/login')
    }
  },[])

  return(
    <TokenListingContextProvider>
      <Layout>
        {profile && <TokenListingBody />}
      </Layout>
    </TokenListingContextProvider>
  )
}
export default TokenListing
