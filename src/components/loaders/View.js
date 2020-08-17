import React from 'react'
import LoadingFacebook from './LoadingFacebook'
import LoadingDualRing from './LoadingDualRing'
import LoadingDefault from './LoadingDefault'
import LoadingEllipsis from './LoadingEllipsis'
import LoadingGrid from './LoadingGrid'
import LoadingRing from './LoadingRing'
import LoadingRipple from './LoadingRipple'
import LoadingSpinner from './LoadingSpinner'
import LoadingRoller from './LoadingRoller'

const View = (props) => {
  return(
    <div className="d-flex justify-content-between">
      <LoadingFacebook />
      <LoadingDualRing />
      <LoadingEllipsis />
      <LoadingDefault />
      <LoadingGrid />
      <LoadingRing />
      <LoadingRipple />
      <LoadingRoller />
      <LoadingSpinner />
    </div>
  )
}
export default View
