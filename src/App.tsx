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
        lg: '200px 1fr'    // now this looks good for genres not taking much space
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

 
//   Displaying the genres


// each genre has image , network tab -> inspect result - > image_background


// now we want to fixed width   , so if we have more real estate on column , our gameGrid
// will strech and takes up available space  


// since our cards have fixed width 300px it causes issue, so total window length is over 1100 pixels 
// if we add columns all and padding also  , so changes in gameconainer whici is container

// now we have too much space between cards after changes in container , so go to grid and reduce the space