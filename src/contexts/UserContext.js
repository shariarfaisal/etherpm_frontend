import React,{ createContext, useState, useEffect } from 'react'
import axios from 'axios'


export const UserContext = createContext()


const UserContextProvider = ({ children }) => {
  const [profile,setProfile] = useState(null)

  const signup = async (payloads) => {
    let [data,error] = [null,null]
    try{
      const res = await axios.post(`http://localhost:1000/api/user/register`,payloads)
      data = res.data
    }catch(err){
      error = err.response.data.error
    }
    return { data, error }
  }

  const login = async (payloads) => {
    let [data,error] = [null,null]
    try{
      const res = await axios.post(`http://localhost:1000/api/user/login`,payloads)
      data = res.data
    }catch(err){
      error = err.response.data.error
    }
    return { data, error }
  }

  const getProfile = async () => {
    try{
      const get = await axios.get(`http://localhost:1000/api/user/profile`)
      setProfile(get.data)
    }catch(err){
      console.log(err.response.data);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('etherpm_user_token')
    if(token){
      getProfile()
    }
  },[])

  return(
    <UserContext.Provider value={{
      signup,
      login,
      getProfile,
      profile
    }}>
      { children }
    </UserContext.Provider>
  )
}
export default UserContextProvider
