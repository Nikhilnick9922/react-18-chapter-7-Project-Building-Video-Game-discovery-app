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
 
 



const useGames =(selectedGenre : Genre | null)=> useData<Game>('/games' , {params : {genres : selectedGenre?.id    }}, [selectedGenre?.id])
    


export default useGames;

 


// also need here selectedGenre

// also we need to pass it to useData which currently taking only endpoint ,
// we have pass the genre to dataHook , we have to make more flexible by giving 
// `axios request config object`


// we can use params which property of `AxiosRequestConfig` 

// since selectedGenre can be null we use `?` for optional chaining 


// now pass value here for selectedGenre for dependencies 