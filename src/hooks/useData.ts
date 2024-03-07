import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";


 

interface FetchResponse<T> {
    count: number,
    results : T[]

}
 const useData = <T>(endPoint : string , requestConfig? : AxiosRequestConfig , deps?: any[])=>{
    const [data, useData] = useState<T[]>([]);
    const [error, setError] = useState ("");
    const [isLoading , setLoding] = useState(false);
 
    useEffect(()=>{
    const controller = new AbortController();
    setLoding(true);
     apiClient.get<FetchResponse<T>>(endPoint , {signal: controller.signal, ...requestConfig})
    .then(res=> {
        useData(res.data.results);
        setLoding(false)        
    })
    .catch(err=>
       { if(err instanceof CanceledError) return;
        setError(err.message);
         setLoding(false)})        
    return ()=> controller.abort();
},deps? [ ...deps] : []) 
// after doing all changes it's not working because it only fetch data on first time
// we can't spread undefined array
return {data ,error ,isLoading}
}


export default useData;




 // we can pass data in request body and we pass query string and so on in `axios request config object`
// we want the second parameter as optional



//  we can check in documentation -> games -> get a list of Games 
/// we can check which string we can take to filter  , we pass genreId or slug


// we need to spread requestConfig , after singal 