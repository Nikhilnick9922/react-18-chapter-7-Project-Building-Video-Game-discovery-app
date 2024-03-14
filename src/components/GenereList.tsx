import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import   useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url';


interface Props {
   onSelectGenre : (genre:Genre) => void,
   selectedGenre  : Genre | null;
}


const GenereList = ({onSelectGenre ,selectedGenre}: Props) => {
    const {data  , isLoading , error}=  useGenres();

    if(error) return null
    if(isLoading) return <Spinner/>
  return (
   <>
   <Heading fontSize={"2xl"} marginBottom={3} >Genres</Heading>
   <List>
        {data.map(genre=><ListItem key={genre.id}>
         <HStack paddingY={1.5}  >
       <Image 
         boxSize={"32px"} 
         objectFit={'cover'}
         borderRadius={8}
         src= {getCroppedImageUrl(genre.image_background)} 
        /> 
      <Button whiteSpace={'normal'} textAlign={'left'} fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={( )=> onSelectGenre(genre)} variant={"link"} fontSize={"lg"}>  {genre.name} </Button>
         </HStack>
        </ListItem>)}
     </List>
   </>
  )
}

export default GenereList

 

  
// by default is `nowrap` we changed it to `normal`

// but text is centerly alliged , so need to left aligend

// another is aspect of images is destorted , because images is 600 x 400
//  objectfit - cover

// and add Heading on top