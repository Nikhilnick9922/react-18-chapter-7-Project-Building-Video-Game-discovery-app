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

 
 
//  refactorying duplicated styles


// we have to create another component which is going to be container for those 
// cards , and then we gonna aplly to that container
