import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { BsSearch } from 'react-icons/bs'

const SearchInput = () => {
  return (
    <InputGroup>
        <InputLeftElement children = {<BsSearch/>} />
        <Input  borderRadius={20} placeholder='Search games...' variant ='filled' />
    </InputGroup>
  )
}

export default SearchInput



//  filled add inner whitinsh lighter tone

// we want to add this to navBar after logo


// now we need icon here , so wrap input with inputGroup and use InputleftElement with children BsSearch



//  now make sure that this changes also looks good on mobile Devicees