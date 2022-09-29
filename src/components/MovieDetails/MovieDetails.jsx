import { useEffect, useState } from 'react';
import { API } from 'components/service/FetchTrending';
import { useParams } from 'react-router-dom';
import { NavLink, Outlet} from 'react-router-dom';

export const MovieDetails = () => {
    const { movieId } = useParams();
    const [filmById, setFilmById] = useState({})
    
    useEffect(() => {
        API.fetchFilmByID(movieId).then(({data}) => {
            setFilmById(data)
        })
    }, [movieId])
    
    const {title, poster_path, genres, release_date, overview, vote_average} = filmById
 
    if(title === undefined) {
        return
    }
    const score = Math.floor(vote_average * 10)
    const date = release_date.slice(0, 4)

    return (
        <main>
            <NavLink to={'/'}>
                Go Back
            </NavLink>
            <div>
               <img width='300' src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
               <h2>{title} ({date})</h2>
               <p>User score: {score}%</p>
               <h2>Overview</h2>
               <p>{overview}</p>
               <p>{genres.length > 0 ? genres.map(item => item.name).join(', ') : 'no info'}</p>
            </div>
            <NavLink to='cast'>Cast</NavLink>
            <br />
            <NavLink to='reviews'>Reviews</NavLink>
            <Outlet/>
        </main>
    )
}