import bullsEyes from '../assets/bulls-eye.webp'
import thumbsUp from '../assets/thumbs-up.webp'
import meh  from '../assets/meh.webp'
import { Image, ImageProps } from '@chakra-ui/react'


interface Props {
    rating : number
}

// index signature
// tell type script compiler , this object can contain any number of keys and they are number
// ImageProps defined props avialable for Image component , its Interface  
const emojiMap:{[key:number]: ImageProps} = {
    3: {src:meh , alt: 'meh' , boxSize: "25px"},
    4: {src:thumbsUp , alt: 'recommended', boxSize: "25px"},
    5: {src:bullsEyes , alt: 'exceptional', boxSize: "30px"},  // added boxsizes 
}


const Emoji = ({rating}: Props) => {
    if(rating<3) return null
  return (
    //  <Image {...emojiMap[rating]} boxSize={"25px"} />
     <Image {...emojiMap[rating]}  marginTop={1} />
  )
}

export default Emoji



//  for different emojis we are not going to throw if statements ,
// we gonna use Map object


//  in game card right after heading we add emoji