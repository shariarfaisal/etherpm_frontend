import React,{ createContext } from 'react'
import axios from 'axios'


export const TokenListingContext = createContext()


const TokenListingContextProvider = ({ children }) => {

  const createTokenListing = async (payloads) => {
    let [data,error] = [null, null]
    try{
      const create = await axios.post('/api/token-listing',payloads)
      data = create.data.data
    }catch(err){
      error = err.response.error.error
    }
    return { data, error }
  }


  return(
    <TokenListingContext.Provider value={{
      createTokenListing
    }}>
      { children }
    </TokenListingContext.Provider>
  )
}
export default TokenListingContextProvider
