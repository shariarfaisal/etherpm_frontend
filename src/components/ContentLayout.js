import React from 'react'
import './contentLayout.scss'
import BreadCrumb from './BreadCrumb'

const ContentLayout = ({ children }) => {
  return(
    <div className="content-layout">
      <BreadCrumb />

      <div className="content-wrapper">
        { children }
      </div>
    </div>
  )
}
export default ContentLayout
