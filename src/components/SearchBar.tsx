import { ChangeEvent, useState } from 'react'
import Button from './Button'
import { icons } from './constants'
import { SSearchBar } from './styledComponents'

const SearchBar = () => {
  const [searchText, setSearchText] = useState<string>('')

  const onSearchInput = (e: ChangeEvent<HTMLInputElement>) => {

    setSearchText(e.target.value)
  }

  return (
    <SSearchBar>
      <div>
        <h3><icons.search /></h3>
        <input
          value={searchText}
          onChange={onSearchInput}
          type="text"
          placeholder='Search bike or anything' />
        <Button>Find</Button>
      </div>
    </SSearchBar>
  )
}

export default SearchBar


// REDDIT 