import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenereList from "./components/GenereList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";



export interface GameQuery {
  genre: Genre | null,
  platform : Platform | null
}

// we don't used `selectedGenres and SelectedPlatform` because its repeated
// now we are going to replace state with state variable of gameQuery

function App() {
  // const [selectedGenre, setSelectedGenre] = useState <Genre | null>(null); // null because no genre selected
  // const [selectedPlatform, setSelectedPlatform]=useState<Platform | null>(null)
 
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
         {/* <GenereList selectedGenre={selectedGenre} onSelectGenre={(genre)=>setSelectedGenre(genre)}/> */}
         <GenereList selectedGenre={gameQuery.genre} onSelectGenre={(genre)=>setGameQuery( {...gameQuery,genre})}/>
        </GridItem>  </Show>
     
     
      <GridItem area="main"  >
      {/* <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform)=>setSelectedPlatform(platform)}/>
        <GameGrid selectedGenre={selectedGenre}  selectedPlatform={selectedPlatform}/> */}
      <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform)=>setGameQuery({...gameQuery, platform})}/>
        {/* <GameGrid gameQuery={gameQuery} selectedGenre={gameQuery.genre}  selectedPlatform={gameQuery.platform}/> */}
        <GameGrid gameQuery={gameQuery}  />
        </GridItem>  
    </Grid>
  );
}

export default App;

 
 
  
//  Refactorying - Extracting a Query Object


// in future as we add more feature we need more variables for tracking things like sortOrder, filtering and what not 
// it makes our code `stincks`
// we should pack related object together , we use `Query Object`



// now we have to same in gameGrid