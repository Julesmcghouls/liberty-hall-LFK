require ('dotenv').config();

const express = require('express');
const cors = require('cors');
const movieRouter = require('./routers/movies');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('api/movies', movieRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});