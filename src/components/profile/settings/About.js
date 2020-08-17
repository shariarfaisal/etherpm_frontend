import React,{ useContext, useState, useEffect } from 'react'
import ContentLayout from '../ContentLayout'
import {UserContext} from '../../../contexts/UserContext'
import UpdateInfo from './UpdateInfo'
import UpdatePassword from './UpdatePassword'

const About = (props) => {
  const { profile } = useContext(UserContext)
  const [updateMode,setUpdateMode] = useState('')

  useEffect(() => {
    const update = new URL(document.location).searchParams.get('update')
    if(update === 'info' || update === 'password'){
      setUpdateMode(update)
    }
  },[updateMode])

  const updateURL = (name) => {
    const url = new URL(document.location)
    if(name){
      url.searchParams.set('update',name)
      setUpdateMode(name)
      window.history.pushState({},null,url.href)
    }else{
      url.searchParams.delete('update')
      setUpdateMode('')
      window.history.pushState({},null,url.href)
    }
  }

  return(
    <ContentLayout>
      <div className="row mx-0">
        {profile && <div className="col-md-10 col-lg-8 row mx-0 text-light p-4 shadow rounded" style={{minHeight: '300px',background: '#41606E'}}>

          {!updateMode && <div className="info col-7 pt-5">
            <h2><i style={{fontSize:'15px'}} className="fas fa-user mx-2 text-warning"></i>{profile.data.name}</h2>
            <p><i style={{fontSize:'15px'}} className="fas fa-envelope mx-2 text-warning"></i>{profile.data.email}</p>
          </div>}
          {updateMode === 'info' && <UpdateInfo setUpdateMode={updateURL} profile={profile.data}/>}
          {updateMode === 'password' && <UpdatePassword setUpdateMode={updateURL} />}

          <div className="col-5 border-left border-secondary">
            <ul className="nav flex-column text-warning" style={{fontSize:'14px'}}>
              <li onClick={e => updateURL('info')} className="nav-item"><p className="mb-0 nav-link pointer">Update Info</p></li>
              <li onClick={e => updateURL('password')} className="nav-item"><p className="mb-0 nav-link pointer">Change Password</p></li>
            </ul>
          </div>

        </div>}
      </div>
    </ContentLayout>
  )
}
export default About
