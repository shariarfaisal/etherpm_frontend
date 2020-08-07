import React from 'react'


const SocialMedia = (props) => {
  return(
    <div className="col-md-3 item">
      <h2 className="f-title">ETHERPM SOCIAL MEDIA</h2>
      <div className="d-flex justify-content-left">
        <ul className="pr-lg-5">
          <li><a target="_blank" href="https://twitter.com/etherpmann"><i className="fa fa-twitter"></i>Twitter</a></li>
          <li><a target="_blank" href="https://www.facebook.com/EtherPM-103870111398982/"><i className="fa fa-facebook"></i>Facebook</a></li>
          <li><a target="_blank" href="https://t.me/etherPM"><i className="fa fa-telegram"></i>Telegram G</a></li>
          <li><a target="_blank" href="https://t.me/etherPMann"><i className="fa fa-telegram"></i>Telegram C</a></li>
        </ul>
        <ul>
          <li><a  target="_blank" href="https://raddit.com/"><i className="fa fa-reddit"></i>Reddit</a></li>
          <li><a  target="_blank" href="https://medium.com/@etherpm"><i className="fa fa-medium"></i>Medium</a></li>
          <li><a  target="_blank" href="https://youtube.com"><i className="fa fa-youtube"></i>YouTube</a></li>
          <li><a  target="_blank" href="https://instagram.com/"><i className="fa fa-instagram"></i>Instagram</a></li>
        </ul>
      </div>

    </div>
  )
}

export default SocialMedia
