import { Routes, Route, NavLink  } from "react-router-dom";
import { Home } from "./Home/Home";
import { About } from "./About/About";
import s from '../components/App.module.css'
import { MovieDetails } from "./MovieDetails/MovieDetails";
import { Cast } from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

export const App = () => {
  const [query, setQuery] = useState('');

  const hundleSubmit = query => {
    setQuery(query);
   
  };

  return (
    <div>
      <nav className={s.nav}>
        <NavLink to="/" end className={s.navItem}>
          Home
        </NavLink>
        <NavLink to="/About">
        Movies
        </NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path="/About" element={<About onSubmit={hundleSubmit}/>}/>
            <Route path="/movies/:movieId" element={<MovieDetails />}>

                <Route path="cast" element={<Cast/>}/>
                <Route path="reviews" element={<Reviews/>}/>

            </Route>
      </Routes>
      <ToastContainer autoClose={2000} />
    </div>
  );
};
