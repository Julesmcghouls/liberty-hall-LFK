import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '../api/tmdb';

const MoviesList = () => {
const [movies, setMovies] = useState([]);

useEffect(() => {
const fetchMovies = async () => {
    const popularMovies = await getPopularMovies();
    setMovies(popularMovies);
};

fetchMovies();
}, []);

return (
<div>
    <h1>Popular Movies</h1>
    <ul>
    {movies.map((movie) => (
        <li key={movie.id}>
        {movie.title} ({movie.release_date})
        </li>
    ))}
    </ul>
</div>
);
};

export default MoviesList;
