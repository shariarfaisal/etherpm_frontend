import React,{ createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const BaseContext = createContext()

const BaseContextProvider = ({ children }) => {
  const [profile, setProfile] = useState(null)
  const [loading,setLoading] = useState(true)
  const [token,setToken] = useState(null)
  const header = 'Authorization'

  const getProfile = async () => {
    try{
      const get = await axios.get(`/user/profile`)
      setProfile(get.data)
      setLoading(false)
      setToken(get.config.headers[header])
    }catch(err){
      // TODO: Error handling ...
      setLoading(false)
    }
  }

  const getSignin = async ({
    payloads,
    setError,
    setLoading,
    setSuccess
  }) => {
    try{
      const res = await axios.post(`/user/signin`,payloads)
      if(res.data){
        setLoading(false)
        setError(false)
        setSuccess('Login successfull.')
        setTimeout(() => {
          localStorage.setItem(header,res.data.accessToken)
          window.location = '/profile'
        },1000)
      }
    }catch(err){
      setLoading(false)
      if(err.response.status === 400){
        setError(err.response.data.errors)
      }else if(err.response.status === 500){
        // TODO: server error handling...
      }
    }
  }


  const getSignup = async ({
    payloads,
    setSuccess,
    setError,
    setLoading
  }) => {
    try{
      const res = await axios.post(`/user/signup`,payloads)
      if(res.data){
        setSuccess('Signup successfull.')
        setLoading(false)
        setTimeout(() => {
          localStorage.setItem(header,res.data.accessToken)
          window.location = '/login'
        },1000)
      }
    }catch(err){
      setLoading(false)
      if(err.response.status === 400){
        setError(err.response.data.errors)
      }

    }
  }

  const getSignout = () => {
    localStorage.removeItem(header)
    window.location = '/'
  }


  useEffect(() => {
    if(localStorage.getItem(header)){
      getProfile()
    }else{
      setLoading(false)
    }
  },[])


  return(
    <BaseContext.Provider value={{
      profile,
      setProfile,
      getSignin,
      getSignup,
      token,
      loading,
      getSignout
    }}>
      { !loading && children }
      {loading && <div>loading...</div>}
    </BaseContext.Provider>
  )
}
export default BaseContextProvider
