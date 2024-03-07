import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import   useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url';


interface Props {
   onSelectGenre : (genre:Genre) => void;
}


const GenereList = ({onSelectGenre}: Props) => {
    const {data  , isLoading , error}=  useGenres();

    if(error) return null
    if(isLoading) return <Spinner/>
  return (
     <List>
        {data.map(genre=><ListItem key={genre.id}>
         <HStack paddingY={1.5}  >
       <Image boxSize={"32px"} borderRadius={8} src= {getCroppedImageUrl(genre.image_background)} /> 
      <Button onClick={( )=> onSelectGenre(genre)} variant={"link"} fontSize={"lg"}>  {genre.name} </Button>
         </HStack>
        </ListItem>)}
     </List>
  )
}

export default GenereList

 

// replace Text with button and varient link
 
