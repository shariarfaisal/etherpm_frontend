import React,{ createContext } from 'react'
import axios from 'axios'


export const TokenListingContext = createContext()


const TokenListingContextProvider = ({ children }) => {

  const createTokenListing = async (payloads) => {
    let [data,error] = [null, null]
    try{
      const create = await axios.post('/tokenlisting',payloads)
      data = create.data
    }catch(err){
      if(err.response.status === 400){
        error = err.response.data.errors
      }
      // FIXME: Error handling ...
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
