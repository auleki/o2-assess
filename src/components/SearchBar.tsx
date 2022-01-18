import React from 'react'
import Button from './Button'
import { icons } from './constants'
import { SSearchBar } from './styledComponents'

const SearchBar = () => {
  return (
    <SSearchBar>
      <div>
        <h3><icons.search /></h3>
        <input type="text" placeholder='Search bike or anything' />
        <Button>Find</Button>
      </div>
    </SSearchBar>
  )
}

export default SearchBar


// REDDIT 