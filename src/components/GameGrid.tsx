 
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

 

 

const GameGrid = () => {
    const {error,games} = useGames()
 
 
  return (
    <>
        {error && <Text>{error}</Text>}
        {/* <SimpleGrid   spacing={10} columns={3}> we now pass object below with vlaues */}
        <SimpleGrid   spacing={10} columns={{sm:1, md:2, lg:3,xl:4} } padding={10}>
            {games.map(game=>
            // <li key={game.id}>{game.id} {game.name}</li>)} 
        <GameCard key={game.id} game={game} />  )}
        </SimpleGrid>
    </>
    )
}

export default GameGrid

 
// replace ul with SimpleGrid

// and `columns` used in SimpleGrid for grid 

// cards so close on mobile devices , so little bit padding