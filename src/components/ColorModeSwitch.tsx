import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"

 

const ColorModeSwitch = () => {
   const {toggleColorMode, colorMode} = useColorMode();
  return (
     <HStack>
        <Switch colorScheme="green" isChecked = {colorMode==='dark'} onChange={toggleColorMode}/>
        <Text >Dark Mode</Text>
     </HStack>
  )
}

export default ColorModeSwitch



// colorMode represent current color

// most of the functionality is already build in here , so we don't have write that much 
// code here. 

// now go to the NavBar and replace `text` with `colorModeSwitch`

// and change switchcolor to green 


// and also remove gridItems colors


