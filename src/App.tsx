import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenereList from "./components/GenereList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState <Genre | null>(null); // null because no genre selected
  const [selectedPlatform, setSelectedPlatform]=useState<Platform | null>(null)
 
 
 
 
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
         <GenereList selectedGenre={selectedGenre} onSelectGenre={(genre)=>setSelectedGenre(genre)}/>
        </GridItem>  </Show>
     
     
      <GridItem area="main"  >
      <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform)=>setSelectedPlatform(platform)}/>
        <GameGrid selectedGenre={selectedGenre}  selectedPlatform={selectedPlatform}/>
        </GridItem>  
    </Grid>
  );
}

export default App;

 
 
 
//  Filering games by platform


// go to platformSelector , and when user select platform we notify here in app

 

// our plmbbing is working , now we need to pass selectedPlatform to `gameGrid` component


     

// you can check finalize result in network tab -> last request -> query String parameterers

