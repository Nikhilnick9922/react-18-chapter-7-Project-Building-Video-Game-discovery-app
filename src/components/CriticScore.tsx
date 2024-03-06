import { Badge } from '@chakra-ui/react'
 

interface Props {
    score:number,
}


const CriticScore = ({score}:Props) => {
    let color  = score > 90 ? 'green' :score > 88 ? "yellow" : "gray"
  return (
     <Badge colorScheme={color} fontSize={"14px"} paddingX={2} borderRadius={"8px"} >
        {score}</Badge>
  )
}

export default CriticScore




/// we also have to improve look and feel of badge based on score
// color for for font only and colorScheme gives whole color 

// and we have used nested ternary for 3 conditions