import { API } from "components/service/FetchTrending"
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


 const Reviews = () => {
    const { movieId } = useParams()
    const [filmReviews, setFilmReviews] = useState([])

    useEffect(() => {
        API.fetchFilmReviews(movieId).then(({data: {results}}) => {
            setFilmReviews(results)
        })
    }, [movieId])

    return (
        <div>
            <ul>
            {filmReviews.map(({ author, id, content }) => (
                <li key={id}>
                    <p><b>Author:</b> {author ? author : 'no name'}</p>
                    <p>{content}</p>
                </li>
            ))}
            </ul>
        </div>
    )
}
export default Reviews 