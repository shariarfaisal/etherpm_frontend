import React from 'react'
import Company from './Company'
import SocialMedia from './SocialMedia'
import ContactUs from './ContactUs'
import Ranking from './Ranking'
import CompanyDemo from './CompanyDemo'


const FooterBox = (props) => {
  return(
    <section className="footer-box">
      <div className="wrapper">
        <div className="row mx-0">

          <Company />
          <SocialMedia />
          <ContactUs />
          <Ranking />
          <CompanyDemo />

        </div>
      </div>
    </section>
  )
}
export default FooterBox
