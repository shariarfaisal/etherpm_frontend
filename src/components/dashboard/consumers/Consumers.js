import React,{ useContext, useEffect } from 'react'
import ContentLayout from '../ContentLayout'
import { Link } from 'react-router-dom'
import { ConsumerContext } from '../contexts/ConsumerContext'
import './consumers.scss'

const Consumers = (props) => {
  const { consumers, getConsumers } = useContext(ConsumerContext)

  useEffect(() => {
    getConsumers('')
  },[])


  return(
    <ContentLayout>
      <div className="consumers-content row mx-0 p-4 justify-content-center">
        <div className="col-xl-10 consumers">

          <div className="list-group">
            <div className="list-group-item d-flex my-2 text-light shadow border-0 rounded-0" style={{fontSize: '13px',background: '#41606E',fontWeight: 'bold'}}>
              <div style={{width: '5%'}}>#</div>
              <div style={{width: '30%'}}>Name</div>
              <div style={{width: '25%'}}>Email</div>
              <div style={{width: '20%'}}>Reffarel ID</div>
              <div style={{width: '20%'}}>Action</div>
            </div>
            {
              consumers && consumers.map((consumer,i) => (
                <div key={i} className="list-group-item d-flex my-2 text-light border-0 rounded-0" style={{fontSize: '13px',background:'inherit'}}>
                  <div style={{width: '5%'}}>{i+1}</div>
                  <div style={{width: '30%'}}>{consumer.name}</div>
                  <div style={{width: '25%'}}>{consumer.email}</div>
                  <div style={{width: '20%'}}>{consumer.refferalID? consumer.refferalID: '- - -'}</div>
                  <div style={{width: '20%'}}>
                    <Link to={`/dashboard/consumers/${consumer._id}`} className="btn btn-info px-3 mx-2">view</Link>
                    <button type="button" className="btn btn-warning px-3 mx-2">delete</button>
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
export default Consumers
