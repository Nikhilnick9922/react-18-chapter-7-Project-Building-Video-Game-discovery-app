import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'
 

interface Props {
    children : ReactNode
}


const GameCardContainer = ({children}: Props) => {
  return (
    <Box borderRadius={10} overflow={'hidden'} width={"300px"} >
        {children}
    </Box>
  )
}

export default GameCardContainer




// box returns div when rendered

// now pass game card and skeleton to child to this 