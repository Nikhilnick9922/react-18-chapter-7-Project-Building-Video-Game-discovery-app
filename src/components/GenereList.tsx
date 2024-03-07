import   useGenres from '../hooks/useGenres'

const GenereList = () => {
   // const {data  }=  useData<Genre>("/genres")
   const {data  }=  useGenres();
  return (
     <ul>
        {data.map(genre=><li key={genre.id}>{genre.name}</li>)}
     </ul>
  )
}

export default GenereList


// have to export Genre interface from useGenre module  
// and also need to pass `EndPoint`

// working but component is know about our endpoints , we should avoid this ,
// this all endponit and Genre interface should move to useGenres hook


// also have to do same for games 