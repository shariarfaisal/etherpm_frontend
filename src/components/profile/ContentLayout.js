import React from 'react'

const ContentLayout = ({ children }) => {
  return(
    <div className="col-9 content-layout" style={{minHeight: '500px',height: 'auto',background: 'rgb(51 80 94)'}}>
      <div className="p-4">
        {children}
      </div>
    </div>
  )
}
export default ContentLayout
