import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
  
      templateAreas={ {
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
       
      }}>
      <GridItem area="nav"  ><NavBar/></GridItem>  
 
      <Show above="lg">  <GridItem area="aside"  >Aside</GridItem>  </Show>
      <GridItem area="main"  >Main</GridItem>  
    </Grid>
  );
}

export default App;

 

/// Fetching the games 


// get api key from `rawg` -> get api key 

// copy api key and use axios 

// no we are going to craete axois with custom configuration and in that we gonna use 
// api key  `https://rawg.io/

// src-> services -> api-client.ts 


// now craete new component `GameGrid`