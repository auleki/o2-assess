import React from 'react'
import { SFooter } from '../components/styledComponents'

const Footer = () => {
  return (
    <SFooter>
      <div className="container">
        <div className="company-info">
          <div className="logo">LOGO</div>
          <div className="info">
            <p className="detail">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online
              for everyone</p>
            <p className="copyright">©eBike 2021. All rights reserved</p>
          </div>
        </div>
        <div className="footer-links">
          <div className="company-links">
            <h3>Company</h3>
            <ul className="links">
              <li className="links">Product</li>
              <li className="links">Bike Type</li>
              <li className="links">About us</li>
              <li className="links">Contact</li>
            </ul>
          </div>
          <div className="help-links">
            <h3>Help</h3>
            <ul className="links">
              <li className="link">Help center</li>
              <li className="link">Contact support</li>
              <li className="link">Instructions</li>
              <li className="link">How it works</li>
            </ul>
          </div>
        </div>

      </div>
    </SFooter>
  )
}

export default Footer
