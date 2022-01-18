import React from 'react'
import SearchBar from '../components/SearchBar'
import { SHeader } from '../components/styledComponents'

const Header = () => {
  return (
    <SHeader>
      <div className="left">
        <h1 className="header-title">Your Bike Electric Update</h1>
        <p className="header-paragraph">
          Dummy text progressive, and affordable
          healthcare, accessible on mobile and online
          for everyone
        </p>
        <SearchBar />
      </div>
      <div className="right">
        <h1>IMAGE</h1>
      </div>
    </SHeader>
  )
}

export default Header
