import React,{ useContext, useState } from 'react'
import ContentLayout from '../ContentLayout'
import { AdminContext } from '../contexts/AdminContext'
import Navigation from './Navigation'
import Info from './Info'
import UpdateForm from './UpdateForm'
import PasswordUpdateForm from './PasswordUpdateForm'
import './profile.scss'

const Profile = (props) => {
  const [updateMode,setUpdateMode] = useState(false)
  const [passwordMode,setPasswordMode] = useState(false)
  const { profile } = useContext(AdminContext)

  return(
    <ContentLayout>
      <div className="row mx-0">
        <div className="col-lg-8 shadow m-5 p-5 text-light color3 rounded" style={{minHeight: '300px',fontSize: '14px'}}>

          {/* Nav bar */}
          <Navigation
            setUpdateMode={setUpdateMode}
            setPasswordMode={setPasswordMode}
          />

          {/* Loading spinner */}
          {!profile &&
            <div className="d-flex w-100 h-100 align-items-center justify-content-center">
              <i className="bx bx-loader-circle bx-md bx-spin"></i>
            </div>
          }

          {/* Profile Info */}
          {profile && !updateMode && !passwordMode && <Info {...profile}/>}

          {/* Update Profile Info Form */}
          {updateMode && profile && !passwordMode &&
            <UpdateForm
              profile={profile}
              setUpdateMode={setUpdateMode}
            />
          }

          {/* Password Update Form */}
          {profile && passwordMode && !updateMode &&
            <PasswordUpdateForm
              setPasswordMode={setPasswordMode}
            />
          }
        </div>
      </div>
    </ContentLayout>
  )
}
export default Profile
