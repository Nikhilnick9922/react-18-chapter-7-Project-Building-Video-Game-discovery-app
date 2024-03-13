import useData from "./useData";
import { Genre } from "./useGenres";



 

 export interface Platform {
    id: number,
    name: string,
    slug: string,
}

 export interface Game {
    id:number;
    name: string;
    background_image :string;
    parent_platforms : {platform : Platform}[],
    metacritic : number, 
}
 
 



const useGames =(selectedGenre : Genre | null ,selectedPlatform : Platform | null)=> 
                    useData<Game>('/games' , 
                    {params : {genres : selectedGenre?.id  , platforms : selectedPlatform?.id   }},
                     [selectedGenre?.id , selectedPlatform?.id])
    


export default useGames;

 
// now pass it to api using parameter object
// using oppional and also as dependency 


// working , but it's not clear which platform is selected in list
// we need to pass selectedPlatform to 'platformSelector'