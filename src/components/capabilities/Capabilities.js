import React from 'react'
import FirstItem from './FirstItem'
import Item from './Item'
import ItemMore from './ItemMore'

const Capabilities = (props) => {
  return(
    <section className="capabilities py-5">
      <div className="capabilities-wrapper px-5">
        <div className="row mx-0">

          <FirstItem />
          {[1,2,3,4,5,6].map(i => <Item key={i} /> )}
          <ItemMore />

        </div>
      </div>
    </section>
  )
}

export default Capabilities
