import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenereList from "./components/GenereList";

function App() {
  return (
    <Grid
  
      templateAreas={ {
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
       
      }}>
      <GridItem area="nav"  ><NavBar/></GridItem>  
 
      <Show above="lg">  <GridItem area="aside"  >
        {/* Aside */}
        <GenereList/>
        </GridItem>  </Show>
     
     
      <GridItem area="main"  >
 
        <GameGrid/>
        </GridItem>  
    </Grid>
  );
}

export default App;

 
 // Creating a Generic Data Fetching Hook



// we have craeted 2 hooks identical 


// copy from useGenres -> and remove genre refrence or make it generic