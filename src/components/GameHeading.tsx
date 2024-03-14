import { Heading } from '@chakra-ui/react'
import React from 'react'
import { GameQuery } from '../App'


interface Props {
    gameQuery : GameQuery
}

const GameHeading = ({gameQuery}: Props) => {

    // initally Games
    //  Action Games
    // Xbox Games
    // Xbox Action Games

const heading = `${gameQuery.platform?.name || "" }  ${gameQuery.genre?.name  || "" } Games ` 

  return (
    <Heading marginY={5} fontSize={"5xl"} as={"h1"} >{heading}</Heading>
  )
}

export default GameHeading



// we have to recieve gameQuery object as prop in this component 

// can be achieved using optinal chainging and constant and templete literal
//  this saves lot of if and else or switch conditions 


// add before flex in app


// for undefined used "" empty string with ||

// finally margin and font size 

// Heading is lot alined so padding in  wrap flex and heading and give them same padding