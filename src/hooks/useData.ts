import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";


 

interface FetchResponse<T> {
    count: number,
    results : T[]

}
// we don't want to attach to specific type so , we use generic type T
const useData = <T>(endPoint : string)=>{
    const [data, useData] = useState<T[]>([]);
    const [error, setError] = useState ("");
    const [isLoading , setLoding] = useState(false);
 
    useEffect(()=>{
    const controller = new AbortController();
    setLoding(true);
    // we also need to specify `T` here 
    apiClient.get<FetchResponse<T>>(endPoint , {signal: controller.signal})
    .then(res=> {
        useData(res.data.results);
        setLoding(false)        
    })
    .catch(err=>
       { if(err instanceof CanceledError) return;
        setError(err.message);
         setLoding(false)})        
    return ()=> controller.abort();
},[]) 

return {data ,error ,isLoading}
}


export default useData;


 // T we have used in FetchResponse is same T passed in `useData`

 // we have given endPoint for get address


 // now get to GenreList component and make changes 