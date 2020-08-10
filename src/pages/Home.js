import React from 'react'
import Layout from '../components/layout/Layout'
import Market from '../components/market/Market'
import Capabilities from '../components/capabilities/Capabilities'
import Benefits from '../components/benefits/Benefits'


const Home = (props) => {
  return(
    <Layout>
      <Market />
      <Capabilities />
      <Benefits />
    </Layout>
  )
}
export default Home
