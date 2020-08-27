import React,{ useContext, useEffect } from 'react'
import ContentLayout from '../ContentLayout'
import { Link } from 'react-router-dom'
import { AdminContext } from '../contexts/AdminContext'

const Admins = (props) => {
  const { admins, getAdmins } = useContext(AdminContext)


  useEffect(() => {
    getAdmins()
  },[])


  return(
    <ContentLayout>
      <div className="consumers-content row mx-0 p-4 justify-content-center">
        <div className="col-xl-10 consumers">

          <div className="list-group">
            <div className="list-group-item d-flex my-2 text-light shadow border-0 rounded-0" style={{fontSize: '13px',background: '#41606E',fontWeight: 'bold'}}>
              <div style={{width: '5%'}}>#</div>
              <div style={{width: '20%'}}>Name</div>
              <div style={{width: '20%'}}>Username</div>
              <div style={{width: '20%'}}>Email</div>
              <div style={{width: '20%'}}>Contact</div>
              <div style={{width: '20%'}}>Action</div>
            </div>
            {
              admins && admins.map((admin,i) => (
                <div key={i} className="list-group-item d-flex my-2 text-light border-0 rounded-0" style={{fontSize: '13px',background:'inherit'}}>
                  <div style={{width: '5%'}}>{i+1}</div>
                  <div style={{width: '20%'}}>{admin.name}</div>
                  <div style={{width: '20%'}}>{admin.username}</div>
                  <div style={{width: '20%'}}>{admin.email}</div>
                  <div style={{width: '20%'}}>{admin.contact}</div>
                  <div style={{width: '15%'}}>
                    <Link to={`/admins/${admin._id}`} className="btn btn-info px-3 mx-2">view</Link>
                  </div>
                </div>
              ))
            }
          </div>

        </div>
      </div>
    </ContentLayout>
  )
}
export default Admins
