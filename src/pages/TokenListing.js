import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import Body from '../components/token-listings/TokenListing'
import TokenListingsContextProvider from '../components/contexts/TokenListingsContext'


const TokenListing = (props) => {
  return(
    <TokenListingsContextProvider>
      <DashboardLayout>
        <Body />
      </DashboardLayout>
    </TokenListingsContextProvider>
  )
}
export default TokenListing
