import React,{ useContext } from 'react'
import { Link } from 'react-router-dom'
import { DashboardContext } from './contexts/DashboardContext'


const BreadCrumb = (props) => {
  const { breadcrumb } = useContext(DashboardContext)

  return (
    breadcrumb && breadcrumb.length > 0 && <nav className="breadcrumb mv-0 pb-0 shadow-sm">
      <ol className="breadcrumb color3 rounded-0">
        {breadcrumb.map(({ title, link, icon},i) => (
          breadcrumb.length !== i+1 ?
            <li key={i} className="breadcrumb-item"><i className={`mx-2 ${icon}`}></i><Link className="text-capitalize" to={link}>{title}</Link></li>:
          <li key={i} className="breadcrumb-item text-capitalize active" aria-current="page"><i className={`mx-2 ${icon}`}></i> {title}</li>
        ))}
      </ol>
    </nav>
  )
}
export default BreadCrumb
