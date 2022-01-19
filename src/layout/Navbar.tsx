import React, { useState } from 'react'
import { SNavbar } from '../components/styledComponents'
import LogoLink from '../assets/o2-logo.svg'
import { navlinks } from '../dataBank'
import { NavLink } from 'react-router-dom'
import { icons } from '../components/constants'

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true)

  const toggleNavbar = () => setIsCollapsed(!isCollapsed)

  const menuNavClass = `navlinks ${isCollapsed ? "" : "active"}`

  return (
    <SNavbar>
      <div className="logo">
        <img src={LogoLink} alt="logo" />
      </div>
      <div className="menu-icon" onClick={toggleNavbar}>
        {isCollapsed ? <icons.menu /> : <icons.close />}
      </div>
      <ul className={menuNavClass}>
        {navlinks.map((link, i) => (
          <NavLink key={i} to={link.path}>{link.linkName}</NavLink>
        ))}
      </ul>
    </SNavbar>
  )
}

export default Navbar

  // < NavLink to = "/" > Product</ >
  //       <NavLink to="">Bike Type</NavLink>
  //       <NavLink to="/about">About Us</NavLink>
  //       <NavLink to="/testimonials">Testimonials</NavLink>
  //       <NavLink to="/contacts">Contacts</NavLink>