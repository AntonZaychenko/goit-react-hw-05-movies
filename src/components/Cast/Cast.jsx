import { API } from "components/service/FetchTrending"
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
    const { movieId } = useParams()
    const [filmCast, setFilmCast] = useState([])
    useEffect(() => {
    API.fetchFilmCast(movieId).then(({data: {cast}}) => {
        setFilmCast(cast)
        
    })
    }, [movieId])
    
    return (
        <div>
            <ul>
               {filmCast.map(({character, id, original_name, profile_path}) => {
                return (
                    <li key={id}>
                        {profile_path !== null ? 
                        <img width="120"
                        src={`https://image.tmdb.org/t/p/w500${profile_path}`} 
                        alt={original_name}/> : 'NO PHOTO'}
                        <p>{original_name}</p>
                        <p>{character}</p>
                    </li>
                )
               })}
            </ul>
        </div>
    )
}

