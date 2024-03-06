import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIconsList from './PlatformIconsList'
import CriticScore from './CriticScore'


interface GameCardProps {
    game: Game
}

const GameCard = ({game}: GameCardProps) => {
  return (
   <Card borderRadius={10} overflow={'hidden'}>
    <Image src={game.background_image} />
    <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
    <HStack justifyContent={'space-between'}>
        <PlatformIconsList platforms={game.parent_platforms.map(p=>p.platform)} />
        <CriticScore score={game.metacritic}/>
    </HStack>
     </CardBody>
   </Card>
  )
}

export default GameCard

 

 // we want critic score to right , so we move 2 comonents in HStack