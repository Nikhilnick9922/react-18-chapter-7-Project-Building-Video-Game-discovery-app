import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'


interface Props {
    onSearch : (searchText:string )=>void;
}


const SearchInput = ({onSearch}:Props) => {
   const ref= useRef<HTMLInputElement>(null)
  return (
 
<form
//  style={{width:"100%"}}
  onSubmit={(event)=> {
    event.preventDefault();
    if(ref.current){
        // console.log(ref.current.value)
         onSearch(ref.current.value)
    }
}}>
<InputGroup>
        <InputLeftElement children = {<BsSearch/>} />
        <Input ref={ref}  borderRadius={20} placeholder='Search games...' variant ='filled' />
    </InputGroup>
</form>
  )
}

export default SearchInput



 
 

//   since Enter is requireed add form -> onSubmit used

// we can use ref or state but this is simple form we use ref hook
 
//  form causes layout issue , we use inline style here , but better practice is to apply
//  rule in global style sheet index.css 


// after successfully console.log , we should pass this to our app component