import { useState, useEffect } from 'react';
import { API } from 'components/service/FetchTrending';
import Gallery from 'components/Gallery/Gallery';
export const Home = () => {
    const [filmsByTranding, setFilmsByTranding] = useState([])
    useEffect(() => {
        API.FetchTrending()
          .then(({ data }) => setFilmsByTranding(data.results))
          .catch(error => console.log(error.message));
      }, []);
    return (
        <div>
            <h1>Trending today</h1>
            <Gallery movies={filmsByTranding}/>
        </div>
    )
}