import { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIconsList from './PlatformIconsList'


interface GameCardProps {
    game: Game
}

const GameCard = ({game}: GameCardProps) => {
  return (
   <Card borderRadius={10} overflow={'hidden'}>
    <Image src={game.background_image} />
    <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
      {/* {game.parent_platforms.map(({platform})=><Text key={platform.id}>{platform.name}</Text>)} */}
      <PlatformIconsList platforms={game.parent_platforms.map(p=>p.platform)} />
       {/* because of design smell, has to do ugly mapping  */}
    </CardBody>
   </Card>
  )
}

export default GameCard

 

//  to render the icons we need mapping between  name of the platform and Icon 
 // we don't want to do mapping here , because it's destraction from what the component is 
 // supposed to do
 // so we gonna move this entire logic for platform in seperate component 