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
       
      }}
      templateColumns={{
        base:`1fr`,
        lg: '200px 1fr'     
      }}
      >  
      
      <GridItem area="nav"  ><NavBar/></GridItem>  
 
      <Show above="lg">  <GridItem area="aside" paddingX={5}  >
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

 
//   Showing the spinner 

// isLoadin in GenereList will work

// and if we have error , we don't want to show in side pannel , that will be 
// to much confronting , we will return null , so 200px coulmn will be blank



 

 
 
 