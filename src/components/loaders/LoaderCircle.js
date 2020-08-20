import React from 'react'

const LoaderCircle = ({ classes, style }) => (
  <div style={style?style: {}} className={`d-flex w-100 justify-content-center align-items-center h-100 ${classes ? classes: ''}`}>
    <i className="bx bx-loader-circle bx-spin bx-md"></i>
  </div>
)

export default LoaderCircle
