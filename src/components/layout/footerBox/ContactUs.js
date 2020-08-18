import React from 'react'
import { Link } from 'react-router-dom'


const ContactUs = (props) => {
  return(
    <div className="col-md-2 item">
      <h2 className="f-title">CONTACT US</h2>
      <ul>
        <li><Link target="_blank" to="/"><i className="bx bxl-telegram"></i>@EtherPMMF</Link></li>
        <li><Link target="_blank" to="/"><i className="bx bxl-telegram"></i>@EtherPMRaj</Link></li>
        <li><Link target="_blank" to="/"><i className="bx bxl-telegram"></i>@EtherPMAM</Link></li>
        <li><Link target="_blank" to="/"><i className="bx bxl-telegram"></i>@EtherPMSM</Link></li>
        <li><Link target="_blank" to="/" className="mail"><i className="bx bx-envelope"></i>Official@etherpm.com</Link></li>
      </ul>
    </div>

  )
}

export default ContactUs
