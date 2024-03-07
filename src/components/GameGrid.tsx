 
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

 

 

const GameGrid = () => {
    const {error,data , isLoading } = useGames();
    const skeletons = [1,2,3,4,5,6,7,8]
 
 
  return (
    <>
        {error && <Text>{error}</Text>}
         <SimpleGrid   spacing={3} columns={{sm:1, md:2, lg:3,xl:4} } padding={10}>
          {isLoading && skeletons.map(skeleton=> <GameCardContainer><GameCardSkeleton key={skeleton}/></GameCardContainer>)}
            {data.map(game=>
       
       <GameCardContainer> <GameCard key={game.id} game={game} /> </GameCardContainer> )}
        </SimpleGrid>
    </>
    )
}

export default GameGrid


  
 
// replace game with generic type which is data in this case
 
// reduce `spacing` to 3