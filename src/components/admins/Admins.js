import React,{ useContext, useEffect } from 'react'
import ContentLayout from '../ContentLayout'
import { AdminContext } from '../contexts/AdminContext'
import AdminsItem from './AdminsItem'
import AdminsItemHeader from './AdminsItemHeader'


const Admins = (props) => {
  const { admins, getAdmins } = useContext(AdminContext)

  useEffect(() => {
    getAdmins()
  },[])

  return(
    <ContentLayout>
      <div className="consumers-content row mx-0 p-4 justify-content-center">
        <div className="col-xl-10 consumers text-light" style={{fontSize: '13px'}}>

          <div className="list-group">
            <AdminsItemHeader />
            {admins && admins.map((admin,i) => <AdminsItem key={i} i={i} {...admin} />)}
          </div>
          {!admins && <div>loading...</div>}

        </div>
      </div>
    </ContentLayout>
  )
}
export default Admins
