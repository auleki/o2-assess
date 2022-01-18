import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import { SLayout } from "../components/styledComponents";
import { Footer } from '.';

const Layout = ({ children }: any) => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scroll(0, 0)
  }, [pathname])

  return (
    <SLayout>
      <Navbar />
      {children}
      <Footer />
    </SLayout>
  )
}

export default Layout
