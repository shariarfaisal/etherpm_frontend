import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import Body from '../components/token-listings/TokenListings'
import TokenListingsContextProvider from '../components/contexts/TokenListingsContext'


const TokenListings = (props) => {
  return(
    <TokenListingsContextProvider>
      <DashboardLayout>
        <Body />
      </DashboardLayout>
    </TokenListingsContextProvider>
  )
}
export default TokenListings
