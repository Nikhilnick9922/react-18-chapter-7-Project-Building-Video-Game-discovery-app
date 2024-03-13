import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenereList from "./components/GenereList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";



export interface GameQuery {
  genre: Genre | null,
  platform : Platform | null
}

 
function App() {
 
  const [gameQuery , setGameQuery] = useState<GameQuery>({}as GameQuery)
 
 
  return (
    <Grid
  
      templateAreas={ {
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
       
      }}
      templateColumns={{
        base:`1fr`,
        lg: '200px 1fr'     
      }}
      >   
    
      <GridItem area="nav"  ><NavBar/></GridItem>  
 
      <Show above="lg">  <GridItem area="aside" paddingX={5}  >
          <GenereList selectedGenre={gameQuery.genre} onSelectGenre={(genre)=>setGameQuery( {...gameQuery,genre})}/>
        </GridItem>  </Show>
     
     
      <GridItem area="main"  >
     
     <HStack spacing={3} padding={2} marginBottom={1}  >
        <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform)=>setGameQuery({...gameQuery, platform})}/>
        <SortSelector/>
     </HStack>
         <GameGrid gameQuery={gameQuery}  />
        </GridItem>  
    </Grid>
  );
}

export default App;

 
 
  
 

//  Building Sort Selector


// we gonna add dropdown list for sorting games , 
// and we will do actuall sorting in next part


// PlatForms is not lined up with Grid  , so used padding in HStack and bottom margin to seperate them 