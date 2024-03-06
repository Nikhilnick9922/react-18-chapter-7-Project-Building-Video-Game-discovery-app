import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";



interface FecthGamesResponse {
    count : number;
    results :  Game[]
}

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
 
 



const useGames =()=>{
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState ("");
    const [isLoading , setLoding] = useState(false);
 
    useEffect(()=>{
    const controller = new AbortController();
    setLoding(true);
    apiClient.get<FecthGamesResponse>('/games' , {signal: controller.signal})
    .then(res=> {
        setGames(res.data.results);
        setLoding(false)       //here
    })
    .catch(err=>
       { if(err instanceof CanceledError) return;
        setError(err.message);
         setLoding(false)})        // here
    return ()=> controller.abort();
},[]) 

return {games ,error ,isLoading}
}


export default useGames;


// loading state track

// we can also use finally in this case 