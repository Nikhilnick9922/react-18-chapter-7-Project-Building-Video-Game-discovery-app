 
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { Platform } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';
import { GameQuery } from '../App';

 
interface Props {
  gameQuery : GameQuery,
 
}
 

 const GameGrid = ({ gameQuery}: Props) => {
     const {error,data , isLoading } = useGames(gameQuery);
    const skeletons = [1,2,3,4,5,6,7,8]
 

    if (error) return <Text>{error}</Text>  // addded
 
  return (
 
      //  {error && <Text>{error}</Text>} 
         <SimpleGrid   spacing={6} columns={{sm:1, md:2, lg:3,xl:4} } padding={10}>
          {isLoading && skeletons.map(skeleton=> 
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton  />
            </GameCardContainer>
          )}
            {data.map(game=>
       
       <GameCardContainer key={game.id} > <GameCard game={game} /> </GameCardContainer> )}
        </SimpleGrid>
   
    )
}

export default GameGrid


// we either have error or gameGrid , so we don't need to wrap them inside the fragment
// so we gonna split return statement into the two pieces

 // now we don't need fragment