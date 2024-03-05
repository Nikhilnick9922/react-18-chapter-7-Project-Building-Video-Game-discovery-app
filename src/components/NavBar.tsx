import { HStack, Image, Text } from "@chakra-ui/react"
import logo from  '../assets/logo.webp'

 

const NavBar = () => {
  return (
    <HStack>
        <Image  src={logo} boxSize= "60px" />
        <Text  >Navbar</Text>
    </HStack>
   
  )
}

export default NavBar


// we want to layout item horizontally so we use `HStack`
// so if we have added text in navbar it should appear horizontally

// and we have to import image like normal imports 

// later on we gonna add search box and mood selector as well

// and finally remove background color 