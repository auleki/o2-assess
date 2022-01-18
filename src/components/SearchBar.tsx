import React from 'react'
import Button from './Button'
import { SSearchBar } from './styledComponents'

const SearchBar = () => {
  return (
    <SSearchBar>
      <div>
        <h3>O</h3>
        <input type="text" placeholder='Search bike or anything' />
        <Button>Find</Button>
      </div>
    </SSearchBar>
  )
}

export default SearchBar


// REDDIT 