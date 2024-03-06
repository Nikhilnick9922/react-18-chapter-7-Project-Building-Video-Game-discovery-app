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
      <GridItem area="main"  >
 
        <GameGrid/>
        </GridItem>  
    </Grid>
  );
}

export default App;

 
 

// dipslaying critic score


// in response we have metacritc for critc score
// and we don't want to impliment all logic in game cart because that is 
// destraction 