import { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react'


interface GameCardProps {
    game: Game
}

const GameCard = ({game}: GameCardProps) => {
  return (
   <Card borderRadius={10} overflow={'hidden'}>
    <Image src={game.background_image} />
    <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
      {game.parent_platforms.map(({platform})=><Text key={platform.id}>{platform.name}</Text>)}
    </CardBody>
   </Card>
  )
}

export default GameCard


 // we want to do this as step by step ,
 // we just want to render plain text for platform to get started

 // we don't see name and id dictly because each object has platform property
 // so destructure and grab platform property