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
                                ordering : gameQuery?.sortOrder   // made changes only here 
                            }},
                     [gameQuery])
    


export default useGames;

 
//  another benefit is we do not have to add in depencies , this is benefit of encapsulaitng
 // related values inside a object

 // our application broke on changing the order 
//  this is because of some of games do not have image , since games now listed from anywhere , in those cases some of they don't have the image
// we have to handle this , but that's distraction from what we are currently working on 
// we have to note this , and fix this later 
// so we temp fix this -> imageUrl.ts


// now check network tag to seee if we are sending the right data