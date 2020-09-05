import React,{ useState, useContext, useEffect } from 'react'
import ContentLayout from '../ContentLayout'
import { AdminContext } from '../contexts/AdminContext'
import { useParams } from 'react-router-dom'
import ProfileInfo from './ProfileInfo'

const Admin = (props) => {
  const { getAdmin } = useContext(AdminContext)
  const [admin,setAdmin] = useState(null)
  const [error,setError] = useState(null)
  const { id: adminID } = useParams()

  const getAdminData = async(id) => {
    const { data, error } = await getAdmin(id)
    if(data){
      setAdmin(data)
    }else if(error){
      setError(error)
    }
  }

  useEffect(() => {
    getAdminData(adminID)
  },[])

  return(
    <ContentLayout>
      <div className="admin-page row mx-0">
        <div className="col-md-10 col-lg-8 shadow p-5 m-5 text-light color3"  style={{minHeight: '200px'}}>


          {!admin && !error && <div>loading...</div>}
          { admin && <ProfileInfo {...admin} />}
          {error && <div className="d-flex w-100 h-100 justify-content-center align-items-center">
            <h1>Not Found</h1>
          </div>}


        </div>
      </div>
    </ContentLayout>
  )
}
export default Admin
