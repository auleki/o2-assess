import React from 'react'
import { SFooter } from '../components/styledComponents'

const Footer = () => {
  return (
    <SFooter>
      <div className="company-info">
        <div className="logo">LOGO</div>
        <div className="info">
          <p className="detail">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online
            for everyone</p>
          <p className="copyright">©eBike 2021. All rights reserved</p>
        </div>
      </div>
    </SFooter>
  )
}

export default Footer
