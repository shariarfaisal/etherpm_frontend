import React from 'react'


const SocialMedia = (props) => {
  return(
    <div className="col-md-3 item">
      <h2 className="f-title">ETHERPM SOCIAL MEDIA</h2>
      <div className="d-flex justify-content-left">
        <ul className="pr-lg-5">
          <li><a target="_blank" href="https://twitter.com/etherpmann"><i className="bx bxl-twitter"></i>Twitter</a></li>
          <li><a target="_blank" href="https://www.facebook.com/EtherPM-103870111398982/"><i className="bx bxl-facebook"></i>Facebook</a></li>
          <li><a target="_blank" href="https://t.me/etherPM"><i className="bx bxl-telegram"></i>Telegram G</a></li>
          <li><a target="_blank" href="https://t.me/etherPMann"><i className="bx bxl-telegram"></i>Telegram C</a></li>
        </ul>
        <ul>
          <li><a  target="_blank" href="https://raddit.com/"><i className="bx bxl-reddit"></i>Reddit</a></li>
          <li><a  target="_blank" href="https://medium.com/@etherpm"><i className="bx bxl-medium"></i>Medium</a></li>
          <li><a  target="_blank" href="https://youtube.com"><i className="bx bxl-youtube"></i>YouTube</a></li>
          <li><a  target="_blank" href="https://instagram.com/"><i className="bx bxl-instagram"></i>Instagram</a></li>
        </ul>
      </div>

    </div>
  )
}

export default SocialMedia
