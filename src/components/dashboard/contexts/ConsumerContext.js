import React,{ createContext, useState } from 'react'
import axios from 'axios'

export const ConsumerContext = createContext()


const ConsumerContextProvider = ({ children }) => {
  const [consumers,setConsumers] = useState(null)

  const getConsumers = async (query) => {
    try{
      const get = await axios.get('/api/user/items')
      if(get.data){
        setConsumers(get.data.data)
      }
    }catch(err){
      console.log(err.response.data);
    }
  }

  const getConsumer = async (id) => {
    let [data,error] = [null,null]
    try{
      const get = await axios.get(`/api/user/item/${id}`)
      if(get.data){
        data = get.data.data
      }
    }catch(err){
      error = err.response.data.error
    }
    return { data, error }
  }


  return(
    <ConsumerContext.Provider value={{
      consumers, getConsumers, getConsumer
    }}>
      { children }
    </ConsumerContext.Provider>
  )
}
export default ConsumerContextProvider
