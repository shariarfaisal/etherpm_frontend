import React from 'react'
import Item from './Item'

const Benefits = (props) => {
  return(
    <section className="benefits border-top border-bottom bg-light">
      <div className="wrapper">
        <h1 className="title"> <span className="text-warning">ETHERPM</span> BENEFITS</h1>
        <div className="divider"></div>
        <div className="row mx-0 justify-content-center items">

          {[1,2,3,4].map(i => <Item key={i} />)}

        </div>
      </div>
    </section>
  )
}

export default Benefits
