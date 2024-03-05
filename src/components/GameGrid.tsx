import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';



interface Game {
    id:number;
    name: string;
}

interface FecthGamesResponse {
    count : number;
    results :  Game[]
}




const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState ("");
 
useEffect(()=>{
    apiClient.get<FecthGamesResponse>('/games')
    .then(res=> setGames(res.data.results));  // since empty array initlize , use interface
})
console.log(games)
  return (
    <div>GameGrid</div>
  )
}

export default GameGrid


// now craete interface for that you can see insponse object in documentation