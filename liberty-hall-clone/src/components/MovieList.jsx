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
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
    {movies.map((movie) => (
        <div key={movie.id} style={{ width: '200px', textAlign: 'center' }}>
        <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
            style={{ width: '100%', borderRadius: '10px' }}
        />
        <h2 style={{ fontSize: '16px' }}>{movie.title}</h2>
        <p style={{ fontSize: '14px', color: 'gray' }}>{movie.release_date}</p>
        </div>
    ))}
    </div>
</div>
);
};

export default MoviesList;
