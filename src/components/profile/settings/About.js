import React,{ useContext, useState, useEffect } from 'react'
import ContentLayout from '../ContentLayout'
import {UserContext} from '../../../contexts/UserContext'
import UpdateInfo from './UpdateInfo'
import UpdatePassword from './UpdatePassword'
import LoaderCircle from '../../loaders/LoaderCircle'
import Info from './Info'
import InfoAction from './InfoAction'


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
        {profile ?
          <div className="col-md-10 col-lg-8 text-light p-4 shadow rounded" style={{minHeight: '300px',background: '#41606E'}}>
            <div className="row mx-0">
              {!updateMode && <Info {...profile} />}
              {updateMode === 'info' && <UpdateInfo setUpdateMode={updateURL} profile={profile}/>}
              {updateMode === 'password' && <UpdatePassword setUpdateMode={updateURL} />}
              <InfoAction updateURL={updateURL}/>
            </div>
          </div>:
          <LoaderCircle
            classes="col-md-10 col-lg-8 text-light"
            style={{minHeight: '300px',background: '#41606E'}}
          />
        }
      </div>
    </ContentLayout>
  )
}
export default About
