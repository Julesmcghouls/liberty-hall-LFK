import axios from 'axios';

const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const accessToken = import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN;

const tmdb = axios.create({
baseURL: 'https://api.themoviedb.org/3',
headers: {
Authorization: `Bearer ${accessToken}`
},
params: {
api_key: apiKey
}
});

export const getPopularMovies = async () => {
try {
const response = await tmdb.get('/movie/popular');
return response.data.results;
} catch (error) {
console.error('Error fetching popular movies:', error);
return [];
}
};
