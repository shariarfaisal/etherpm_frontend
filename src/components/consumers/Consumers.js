import React,{ useContext, useEffect } from 'react'
import ContentLayout from '../ContentLayout'
import { ConsumerContext } from '../contexts/ConsumerContext'
import './consumers.scss'
import ConsumersItem from './ConsumersItem'
import ConsumersItemHeader from './ConsumersItemHeader'

const Consumers = (props) => {
  const { consumers, getConsumers } = useContext(ConsumerContext)

  useEffect(() => {
    getConsumers('')
  },[])


  return(
    <ContentLayout>
      <div className="consumers-content row mx-0 p-4 justify-content-center">
        <div className="col-xl-10 consumers text-light" style={{fontSize: '13px'}}>

          <div className="list-group">
            <ConsumersItemHeader />
            {consumers && consumers.map((consumer,i) => <ConsumersItem key={i} i={i} {...consumer} />)}
          </div>
          {!consumers && <div>loading...</div>}

        </div>
      </div>
    </ContentLayout>
  )
}
export default Consumers
