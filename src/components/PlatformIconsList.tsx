import React from 'react'
import { Platform } from '../hooks/useGames'
import { Text } from '@chakra-ui/react'


interface PlatformIconsListProps {
    platforms : Platform []
}


const PlatformIconsList = ({platforms} : PlatformIconsListProps) => {
  return (
 
 <>
       { platforms.map((platform)=><Text key={platform.id}>{platform.name}</Text>)}

 </>
// since we are returning multiple comonent wrap in fragment
  )
}

export default PlatformIconsList



// first to get started we gonna see rendering basic later we look for integration
// later we gonna replace text with icons 


