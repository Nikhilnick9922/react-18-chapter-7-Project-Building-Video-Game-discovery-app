import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import   useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url';

const GenereList = () => {
    const {data  }=  useGenres();
  return (
     <List>
        {data.map(genre=><ListItem key={genre.id}>
         <HStack paddingY={1.5}  >
       <Image boxSize={"32px"} borderRadius={8} src= {getCroppedImageUrl(genre.image_background)} /> 
      <Text fontSize={"lg"}>  {genre.name} </Text>
         </HStack>
        </ListItem>)}
     </List>
  )
}

export default GenereList

 

//   use List for without bullet point 

// HStack for lining horizontally

// and Text for name 

// for left padding in app > container add padding