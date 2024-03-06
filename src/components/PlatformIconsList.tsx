 import { FaWindows , FaXbox, FaPlaystation ,FaApple , FaLinux,FaAndroid} from 'react-icons/fa'
 import {MdPhoneIphone} from 'react-icons/md'
 import {SiNintendo} from 'react-icons/si'
 import {BsGlobe} from 'react-icons/bs'
import { Platform } from '../hooks/useGames'
import { HStack, Icon, Text } from '@chakra-ui/react'
import { IconType } from 'react-icons'


interface PlatformIconsListProps {
    platforms : Platform []
}


const PlatformIconsList = ({platforms} : PlatformIconsListProps) => {
  // used index signature for like we have any number of key with string value 
  // , and maped to iconType in react-icons 
  const iconMap : {[key: string] : IconType}  = {
    pc: FaWindows,
    playstation : FaPlaystation,
    xbox : FaXbox,
    nintendo : SiNintendo,
    mac : FaApple,
    linux : FaLinux,
    android : FaAndroid,
    ios : MdPhoneIphone,
    web: BsGlobe
  }

  return (
 
 <HStack marginY={2} >
       {/* { platforms.map((platform)=><Text key={platform.id}>{platform.name}</Text>)} */}
       { platforms.map((platform)=>
      <Icon as ={ iconMap[platform.slug]}  color="gray.500"/>
       )}
    
      
{/* here we have encountered wierd and common typescript issue , which is solved above */}
 </HStack>
   ) 
  
}

export default PlatformIconsList

 

// imported icons from `react-icons/fa` and `react-icons/md` and `si` and `bs`

// now for mapping we are not going to use `if` statement because that is ugly 
// so we are gonna map

// slug has lowercase and name is camel case for object we are goint to define 
// slug is think as textual id 

// to stack them horizontally we used hStack

// color of icons same as color of heading this creates visual noise
// so icons has to be little bit darker to clean up mess
// in chakra we can use grey.500 like  can find in documentation in `default theme`

// spacing between icons and heading 