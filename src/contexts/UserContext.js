import React,{ createContext, useContext } from 'react'
import { BaseContext } from './BaseContext'
import axios from 'axios'

export const UserContext = createContext()


const UserContextProvider = ({ children }) => {
  const { token, profile, setProfile } = useContext(BaseContext)

  const getUpdateInfo = async ({
    payloads,
    setError,
    setSuccess,
    setLoading
  }) => {
    try{
      const res = await axios.put(`/user/profile`,payloads)
      if(res.data){
        setLoading(false)
        setError('')
        setSuccess('Data has been updated.')
        setProfile({...res.data})
      }
    }catch(err){
      setLoading(false)
      if(err.response.status === 400){
        setError(err.response.data.errors)
      }
    }
  }

  const getUpdatePassword = async ({
    payloads,
    setSuccess,
    setError,
    setLoading
  }) => {
    try{
      const res = await axios.put(`/user/password`,payloads)
      if(res.data){
        setLoading(false)
        setSuccess('Password updated.')
        return true
      }
    }catch(err){
      setLoading(false)
      if(err.response.status === 400){
        setError(err.response.data.errors)
      }
      return false
      // FIXME: 500 error code handling ...
    }
  }

  return(
    <UserContext.Provider value={{
      profile,
      token,
      getUpdateInfo,
      getUpdatePassword
    }}>
      { children }
    </UserContext.Provider>
  )
}
export default UserContextProvider
