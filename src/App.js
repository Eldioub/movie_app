import React, { useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';

import searchIcon from './searchIcon.svg';

const App = () => {
    const API_URL = 'http://www.omdbapi.com?apikey=c032e2d7';

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovie = async (title) => {
        const reponse = await fetch(API_URL+'&s='+title);
        const data = await reponse.json();
        setMovies(data.Search);
    }

    return (
        <div className='app'>
            <h1>Movie App</h1>
            <div className='search'>
                <input placeholder='Search for movies' onChange={(e) => {setSearchTerm(e.target.value)}} onKeyDown={(e) => {if(e.key === 'Enter') searchMovie(searchTerm)}} />
                <img src={searchIcon} alt='Search' onClick={() => {searchMovie(searchTerm)}} />
            </div>
            {movies !== undefined && movies.length > 0 ? (
                <div className='container'>
                    {movies.map( (movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            ) : (
                <div className='empty'>
                    no movie found
                </div>
            )}
        </div>
    );
}

export default App;