import { useEffect, useState } from "react";
import { getPopularMovies } from "../api/tmdb";

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
<section className="movie-section">
    <h2 className="section-title">Current Cosmic Features</h2>
    <div className="movie-grid">
    {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
        <div className="poster-container">
            <img
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={movie.title}
            className="movie-poster"
            />
            <div className="movie-info">
            <h3>{movie.title}</h3>
            <div className="rating">
                <span>★</span>
                {movie.vote_average}/10
            </div>
            <p className="overview">
                {movie.overview.substring(0, 150)}...
            </p>
            </div>
        </div>
        </div>
    ))}
    </div>
</section>
);
};

export default MoviesList;
