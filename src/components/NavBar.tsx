import { HStack, Image    } from "@chakra-ui/react"
import logo from  '../assets/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch"

 

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding= "10px">
        <Image  src={logo} boxSize= "60px" />
        <ColorModeSwitch/>
    </HStack>
   
  )
}

export default NavBar


// we want to layout item horizontally so we use `HStack`
// so if we have added text in navbar it should appear horizontally

// and we have to import image like normal imports 

// later on we gonna add search box and mood selector as well

// and finally remove background color 

// now finally we want to do is , push `switch` to right side