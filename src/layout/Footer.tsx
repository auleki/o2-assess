import React from 'react'
import { SFooter } from '../components/styledComponents'
import TinyDotImg from "../assets/tiny-dots-3.png"

const Footer = () => {
  return (
    <SFooter>
      <div className="container">
        <div className="company-info">
          <div className="logo">
            <span className="circle">
              <span className="letter">B</span>
            </span>
            <span className='logo-text'>eBike</span>
          </div>
          <p className="detail">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online
            for everyone</p>
          <p className="copyright">©eBike 2021. All rights reserved</p>
        </div>
        <div className="footer-links">
          <div className="company-links">
            <h3>Company</h3>
            <ul className="links">
              <li className="link">Product</li>
              <li className="link">Bike Type</li>
              <li className="link">About us</li>
              <li className="link">Contact</li>
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
      <img src={TinyDotImg} alt="" className="bg-dot" />
    </SFooter>
  )
}

export default Footer
