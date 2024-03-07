import useData from "./useData";

 


 export interface Genre {
    id: number,
    name:string
}

 

const useGenres = ()=> useData<Genre>('/genres');


export default useGenres;


 

// shortKey -> cmd + .   => to remove all unused imports 