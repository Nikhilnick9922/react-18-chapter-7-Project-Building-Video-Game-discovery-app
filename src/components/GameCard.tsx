import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, Image } from '@chakra-ui/react'


interface GameCardProps {
    game: Game
}

const GameCard = ({game}: GameCardProps) => {
  return (
   <Card borderRadius={10} overflow={'hidden'}>
    <Image src={game.background_image} />
    <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
    </CardBody>
   </Card>
  )
}

export default GameCard



// Image has property of backgrond_image (for src) in documentation we need to add to interface of Game 
// interface


//round cornders on botton but not on top ?, because image is bigger than it's container
// overflow hidden 


// size of heading 


// now for columns in different sizes go to `GameGrid`

