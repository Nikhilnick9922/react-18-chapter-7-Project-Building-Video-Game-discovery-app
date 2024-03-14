import { HStack, Image    } from "@chakra-ui/react"
import logo from  '../assets/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"
import { GameQuery } from "../App"

 interface Props {
  onSearch : (searchText:string)=>void
 }

const NavBar = ({onSearch}: Props) => {
  return (
     <HStack   padding= "10px">
        <Image  src={logo} boxSize= "60px" />
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch/>
    </HStack>
   
  )
}

export default NavBar


 

//  we don't want to pass function on so many lelvel of hirarchy , that's so ugly
//  in advance topics we will solve this problem in more elegent way