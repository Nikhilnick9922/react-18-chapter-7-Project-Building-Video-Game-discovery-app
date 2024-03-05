import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
  
      templateAreas={ {
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
       
      }}>
      <GridItem area="nav" bg="coral"><NavBar/></GridItem>  
 
      <Show above="lg">  <GridItem area="aside" bg="gold">Aside</GridItem>  </Show>
      <GridItem area="main" bg="dodgerblue">Main</GridItem>  
    </Grid>
  );
}

export default App;

 

// Building the Navigation Bar

// we gonna just work on basic layout of navigation bar , later we gonnna add different concerns
