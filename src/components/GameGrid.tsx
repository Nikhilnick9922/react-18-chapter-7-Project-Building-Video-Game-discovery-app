import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';



// interface Game {
//     id:number;
//     name: string;
// }

// interface FecthGamesResponse {
//     count : number;
//     results :  Game[]
// }

 

const GameGrid = () => {
//     const [games, setGames] = useState<Game[]>([]);
//     const [error, setError] = useState ("");
 
// useEffect(()=>{
//     apiClient.get<FecthGamesResponse>('/games')
//     .then(res=> setGames(res.data.results))
//     .catch(err=>setError(err.message))
// })

 const {error,games} = useGames()
 
 
  return (
  <>
 {error && <Text>{error}</Text>}
  <ul>
        {games.map(game=>
            <li key={game.id}>{game.id} {game.name}</li>)}
     </ul>
  </>
  )
}

export default GameGrid

 
// this component might have canceled request in fufure and other logic ,
// so fetching shold not has to be here , it done seperately 
// components shoould be responsible for returnign markup and user interaction at higher levels 


// 2 ways move fetching logic to service, or move entire state and useEffect to hook 
// hook can used to seperate concerns , and make our code more modular and reusable 


// src -> hooks -> useGames.ts