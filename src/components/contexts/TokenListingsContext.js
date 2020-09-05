import React,{ createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const TokenListingsContext = createContext()

const TokenListingsContextProvider = ({ children }) => {
  const [tokenListings,setTokenListings] = useState(null)

  const getTokenListings = async () => {
    try{
      const tokens = await axios.get('/api/token-listing')
      if(tokens){
        setTokenListings(tokens.data.data)
      }
    }catch(err){
      console.log(err);
    }
  }

  const getTokenListingById = async ({ id, setTokenListing, setError}) => {
    try{
      const tokens = await axios.get(`/api/token-listing/${id}`)
      if(tokens){
        setTokenListing(tokens.data.data)
      }
    }catch(err){
      setError(err.response.data.error)
    }
  }

  useEffect(() => {
    getTokenListings()
  },[])


  return(
    <TokenListingsContext.Provider value={{
      tokenListings, getTokenListingById
    }}>
      { children }
    </TokenListingsContext.Provider>
  )
}
export default TokenListingsContextProvider
