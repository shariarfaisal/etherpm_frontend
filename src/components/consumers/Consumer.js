import React,{ useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ConsumerContext } from '../contexts/ConsumerContext'
import ContentLayout from '../ContentLayout'


const Info = ({ name, email }) => (
  <div>
    <div className="d-flex">
      <span className="w-50">Name</span>
      <span className="w-50">{name}</span>
    </div>
    <div className="d-flex">
      <span className="w-50">Email</span>
      <span className="w-50">{email}</span>
    </div>
  </div>
)

const Consumer = (props) => {
  const { consumerID } = useParams()
  const { getConsumer } = useContext(ConsumerContext)
  const [consumer,setConsumer] = useState(null)
  const [error,setError] = useState(null)

  const handleConsumer = async () => {
    const { data, error } = await getConsumer(consumerID)
    if(data){
      setConsumer(data)
    }else if(error){
      setError(error)
    }
  }

  useEffect(() => {
    handleConsumer()
  },[])



  return(
    <ContentLayout>
      <div className="row mx-0">
        <div className="col-xl-8 m-5 text-light shadow color3 p-5"  style={{fontSize: '13px',minHeight: '200px'}}>

          {!consumer && !error && <div className="">loading...</div>}
          {consumer && <Info {...consumer} />}
          {error && <div className="w-100 h-100 flex-center"><h1>Not Found</h1></div>}

          
        </div>
      </div>
    </ContentLayout>
  )
}
export default Consumer
