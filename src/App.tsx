import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenereList from "./components/GenereList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";

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
         <GenereList selectedGenre={selectedGenre} onSelectGenre={(genre)=>setSelectedGenre(genre)}/>
        </GridItem>  </Show>
     
     
      <GridItem area="main"  >
      <PlatformSelector/>
        <GameGrid selectedGenre={selectedGenre}/>
        </GridItem>  
    </Grid>
  );
}

export default App;

 
 
 
//  Building   platform Selectors


// first of all we will only focus on rendering the list, then later in next 
// part we will focun on filtering .

// to render the list of dropdown list of platforms we need different API, we can find 
// that in documentation -> platforms -> list of parent platforms  -> get


// now we need to create the hook , to fectch data from this endpoint


// we can create custom hook for fetching any kind of data with very little code .


 



