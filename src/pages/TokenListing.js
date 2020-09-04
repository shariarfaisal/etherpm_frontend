import React from 'react'
import Layout from '../components/layout/Layout'
import TokenListingBody from '../components/tokenListing/TokenListing'
import TokenListingContextProvider from '../contexts/TokenListingContext'


const TokenListing = (props) => {
  return(
    <TokenListingContextProvider>
      <Layout>
        <TokenListingBody />
      </Layout>
    </TokenListingContextProvider>
  )
}
export default TokenListing
