import { API } from "components/service/FetchTrending"
import { useState } from 'react';
import { toast } from 'react-toastify';
import { MovieList } from "components/MovieList/MovieList";

export const About = ({onSubmit}) => {
    const [query, setQuery] = useState('')
    const [filmByQueey, setFilmByQuery] = useState([])

    const hundleInputChange = evt => {
        const {value} = evt.target
        setQuery(value)
       }

    const hundleFormSubmit = evt => {
       
        evt.preventDefault()
        if(!query.trim()) {
            toast.error('Please, enter your request')
            return
        }
        onSubmit(query);
        setQuery('')
        API.fetchFilmByQuery(query).then(({data: {results}}) => {
            setFilmByQuery(results)
        })
    }

    

    return (
        <div>
            <div>
            <form action="" onSubmit={hundleFormSubmit}>
                <input type="text" name="" id="" value={query} onChange={hundleInputChange}/>
                <button type="submit">Search</button>
            </form>
            </div>
            <MovieList films={filmByQueey}/>
        </div>
    )
}