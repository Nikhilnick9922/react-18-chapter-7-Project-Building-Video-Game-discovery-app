 
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

 

 

const GameGrid = () => {
    const {error,games , isLoading } = useGames();
    const skeletons = [1,2,3,4,5,6,7,8]
 
 
  return (
    <>
        {error && <Text>{error}</Text>}
         <SimpleGrid   spacing={10} columns={{sm:1, md:2, lg:3,xl:4} } padding={10}>
          {isLoading && skeletons.map(skeleton=><GameCardSkeleton key={skeleton}/>)}
            {games.map(game=>
         <GameCard key={game.id} game={game} />  )}
        </SimpleGrid>
    </>
    )
}

export default GameGrid

 
 
// created array to repeat map with skeptos cards 


// we have layout issue on refresh because skeletons don't have same width as cards
// we will refactor width later  