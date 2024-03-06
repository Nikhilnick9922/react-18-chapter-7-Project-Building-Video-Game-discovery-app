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

 
 
//  Improving User Experience with loading skeleton


// first we need to track the loading state in our hook 


//  we gonna make skeleton component , so we load that while images is loaded

// border radius same apply


// we gonna resolve duplication in next 