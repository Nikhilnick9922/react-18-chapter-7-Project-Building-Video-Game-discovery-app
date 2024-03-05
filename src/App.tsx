import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      // templateAreas={`"nav nav" "aside main"`}>
      templateAreas={ {
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
       
      }}>
      <GridItem area="nav" bg="coral">Nav</GridItem>  
      {/* <GridItem area="aside" bg="gold">Aside</GridItem>  */}
      <Show above="lg">  <GridItem area="aside" bg="gold">Aside</GridItem>  </Show>
      <GridItem area="main" bg="dodgerblue">Main</GridItem>  
    </Grid>
  );
}

export default App;

// creating a responsive layout

// we are going to use grid for layout
 

// now we gonna add object in tempplate areas which act as break point 
// for more details chakra website -> styled system -> responsive styles 
// we have sm , md, lg, xl, 2xl this are break points 

// so we have to define 2 break points here 1 for mobile devices and 1 for more than 1024 pixels devices
 

  // we wrap aside in `show` to hide in mobile screen