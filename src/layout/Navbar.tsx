import React from 'react'
import { SNavbar } from '../components/styledComponents'
import LogoLink from '../assets/o2-logo.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <SNavbar>
      <div className="logo">
        <img src={LogoLink} alt="logo" />
      </div>

      <ul className="navlinks">
        <NavLink to="/">Product</NavLink>
        <NavLink to="/bike-types">Bike Type</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/testimonials">Testimonials</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </ul>
    </SNavbar>
  )
}

export default Navbar
