import React,{ useState, createContext, useEffect } from 'react'
import axios from 'axios'

export const AdminContext = createContext()

const AdminContextProvider = ({ children }) => {
  const [profile,setProfile] = useState(null)
  const [admins,setAdmins] = useState(null)

  const getLogin = async (payloads) => {
    let [error,data] = [null,null]
    try{
      const get = await axios.post('/api/admin/login',payloads)
      if(get.data){
        data = get.data.token
      }
    }catch(err){
      error = err.response.data.error
    }
    return { error, data }
  }

  const getProfile = async () => {
    try{
      const get = await axios.get('/api/admin/profile')
      if(get.data){
        setProfile(get.data.data)
      }
    }catch(err){
      console.log(err.response.data);
      localStorage.removeItem('etherpm_admin_token')
      window.location = '/login'
    }
  }

  const getAdmins = async () => {
    try{
      const get = await axios.get('/api/admin/items')
      if(get.data){
        setAdmins(get.data.data)
      }
    }catch(err){
      console.log(err.response.data.error);
    }
  }

  const getAdmin = async (id) => {
    let [data,error] = [null,null]
    try{
      const get = await axios.get(`/api/admin/item/${id}`)
      if(get.data){
        data = get.data.data
      }
    }catch(err){
      error = err.response.data.error
    }
    return { data, error}
  }

  const profileUpdate = async (payloads) => {
    let [data,error] = [null,null]
    try{
      const get = await axios.put(`/api/admin/profile`,payloads)
      if(get.data){
        data = get.data.data
        setProfile({...data})
      }
    }catch(err){
      error = err.response.data.error
    }
    return { data, error}
  }

  const passwordUpdate = async (payloads) => {
    let [data,error] = [null,null]
    try{
      const get = await axios.put(`/api/admin/password`,payloads)
      if(get.data){
        data = get.data.data
      }
    }catch(err){
      error = err.response.data.error
    }
    return { data, error}
  }

  useEffect(() => {
    const token = localStorage.getItem('etherpm_admin_token')
    if(token){
      getProfile()
    }
  },[])


  return(
    <AdminContext.Provider value={{
      profile, getLogin, admins, getAdmins, getAdmin, profileUpdate, passwordUpdate
    }}>
      { children }
    </AdminContext.Provider>
  )
}
export default AdminContextProvider
