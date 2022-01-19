import React from 'react'
import { NavLink } from 'react-router-dom'

const DesktopNavLinks = () => {
  return (
    <ul className="navlinks">
      <NavLink to="/">Product</NavLink>
      <NavLink to="/bike-types">Bike Type</NavLink>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/testimonials">Testimonials</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </ul>
  )
}

export default DesktopNavLinks
