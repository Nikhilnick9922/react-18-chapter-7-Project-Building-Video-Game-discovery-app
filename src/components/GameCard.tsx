import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIconsList from './PlatformIconsList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'


interface GameCardProps {
    game: Game
}

const GameCard = ({game}: GameCardProps) => {
  return (
   <Card borderRadius={10} overflow={'hidden'} width={"300px"}>
     <Image src={ getCroppedImageUrl(game.background_image)} />
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

 
 