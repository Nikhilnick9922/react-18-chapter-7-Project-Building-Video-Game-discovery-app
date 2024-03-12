import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenereList from "./components/GenereList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState <Genre | null>(null); // null because no genre selected
  
 
 
  
 
 
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
        <GenereList selectedGenre={selectedGenre} onSelectGenre={(genre)=>setSelectedGenre(genre)}/>
        </GridItem>  </Show>
     
     
      <GridItem area="main"  >
 
        <GameGrid selectedGenre={selectedGenre}/>
        </GridItem>  
    </Grid>
  );
}

export default App;

 
 
 
 // Highligting the selected Genre


 // passed selectedGenre in genreList and rendered bold in button dynamically
