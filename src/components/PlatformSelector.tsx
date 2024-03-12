import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'

const PlatformSelector = () => {
   const {data , error} = usePlatforms();

   if(error) return null;
  return (
  <Menu>
       <MenuButton as ={Button} rightIcon={<BsChevronDown/> }>
        Platforms
     </MenuButton>
     <MenuList>
        {/* <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem> */}

        {data.map(platform=><MenuItem key={platform.id}>{platform.name}</MenuItem>)}
     </MenuList>
  </Menu>
  )
}

export default PlatformSelector


// menu is used for beautiful dropdown list 
// compositive comopnent so it has differnt children


// if there is error we just want to return null