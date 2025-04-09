const express = require('express');
const axios = require('axios');
const router = express.Router();

const TMDB_API_KEY = process.env.TMDB_API_KEY;

// Get currently playing movies
router.get('/now-playing', async (req, res) => {
try {
const response = await axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}&region=US`
);
res.json(response.data.results.slice(0, 3)); // Return only first 3 movies
} catch (error) {
console.error('TMDB API error:', error);
res.status(500).json({ error: 'Failed to fetch movies' });
}
});

// Mock showtimes data for Liberty Hall
router.get('/showtimes/:movieId', (req, res) => {
const { movieId } = req.params;

// Mock showtimes for the two theaters
const showtimes = {
'little': ['10:00 AM', '2:00 PM', '6:00 PM', '9:30 PM'],
'big': ['11:00 AM', '3:00 PM', '7:00 PM', '10:30 PM']
};

res.json({
movieId,
showtimes,
theaterInfo: {
    little: "Our intimate 100-seat theater with digital projection",
    big: "The historic 500-seat main theater with 35mm and digital"
}
});
});

module.exports = router;