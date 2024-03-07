 
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';

 
interface Props {
  selectedGenre : Genre | null
}
 

const GameGrid = ({selectedGenre }: Props) => {
    const {error,data , isLoading } = useGames(selectedGenre);
    const skeletons = [1,2,3,4,5,6,7,8]
 
 
  return (
    <>
        {error && <Text>{error}</Text>}
         <SimpleGrid   spacing={3} columns={{sm:1, md:2, lg:3,xl:4} } padding={10}>
          {isLoading && skeletons.map(skeleton=> 
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton  />
            </GameCardContainer>
          )}
            {data.map(game=>
       
       <GameCardContainer key={game.id} > <GameCard game={game} /> </GameCardContainer> )}
        </SimpleGrid>
    </>
    )
}

export default GameGrid


  
 // made the changes in both places


 // also need to pass SelectedGenre to gameshook