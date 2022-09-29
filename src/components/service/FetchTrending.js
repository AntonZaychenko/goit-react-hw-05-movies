
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3'

const KEY = '421624d792b4979a007d16fd89fc49dc'

 const FetchTrending = async () => {
   
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${KEY}`
    );
  
   return response
  };

  const fetchFilmByID = async movieId => {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US`
    );
  
    return response;
  };

  const fetchFilmCast = async movieId => {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
    );
  
    return response;
  };

  const fetchFilmReviews = async movieId => {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US`
    );
  
    return response;
  };
  const fetchFilmByQuery = async (query) => {
    const response = await axios.get(
      `${BASE_URL}/search/movie?&language=en-U&include_adult=true&api_key=${KEY}&page=1&query=${query}`
    );
  
    return response;
  };
export const API = {
  FetchTrending,
  fetchFilmByID,
  fetchFilmCast,
  fetchFilmReviews,
  fetchFilmByQuery
}