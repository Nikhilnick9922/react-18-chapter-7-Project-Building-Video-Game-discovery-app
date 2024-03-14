import { GameQuery } from './../App';
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
 
 



 const useGames =(gameQuery : GameQuery)=> 
                    useData<Game>('/games' , 
                 
                    {params : 
                                {genres : gameQuery.genre?.id  , 
                                platforms : gameQuery.platform?.id ,
                                ordering : gameQuery?.sortOrder   ,
                                search : gameQuery?.searchText       // added here
                            }},
                     [gameQuery])
    


export default useGames;

 

//  this is beauty of queryObject, from adding so many elements , we just get all of them 
// from query object as single