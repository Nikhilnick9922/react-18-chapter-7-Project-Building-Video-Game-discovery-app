import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenereList from "./components/GenereList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState <Genre | null>(null); // null because no genre selected
  // typescript does not know , in future what it will going to save so pass Genre interface
 
 
 
  
 
 
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
        {/* Aside */}
        <GenereList onSelectGenre={setSelectedGenre}/>
        </GridItem>  </Show>
     
     
      <GridItem area="main"  >
 
        <GameGrid selectedGenre={selectedGenre}/>
        </GridItem>  
    </Grid>
  );
}

export default App;

 
 
// Filtering Games by Genres


// we have unique key error , since we wrapeed GameCardSkeleton with container in 2 places 
// and in platformIconlist also



// we need to share the `selected Genre`  with gameGrid , so how can we share `states` between
// two components
// we should liefted up with closest parent , which is app component


// we have to mention that selectedGnere can hold <Genre | null >






 
 
 