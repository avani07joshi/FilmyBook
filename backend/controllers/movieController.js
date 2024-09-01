const Movie = require('../models/Movie');

const getMovies = async (req, res) => {
    const movies = await Movie.find();
    res.json(movies);
};

const addMovie = async (req, res) => {
    const { title, genre, director, description, releaseDate, language, duration, posterUrl } = req.body;

    const movie = new Movie({
        title,
        genre,
        director,
        description,
        releaseDate,
        language,
        duration,
        posterUrl
    });

    const createdMovie = await movie.save();
    res.status(201).json(createdMovie);
};

const updateMovie = async (req, res) => {
    const { title, genre, director, description, releaseDate, language, duration, posterUrl } = req.body;

    const movie = await Movie.findById(req.params.id);

    if (movie) {
        movie.title = title;
        movie.genre = genre;
        movie.director = director;
        movie.description = description;
        movie.releaseDate = releaseDate;
        movie.language = language;
        movie.duration = duration;
        movie.posterUrl = posterUrl;

        const updatedMovie = await movie.save();
        res.json(updatedMovie);
    } else {
        res.status(404).json({ message: 'Movie not found' });
    }
};

const deleteMovie = async (req, res) => {
    const movie = await Movie.findById(req.params.id);

    if (movie) {
        await movie.remove();
        res.json({ message: 'Movie removed' });
    } else {
        res.status(404).json({ message: 'Movie not found' });
    }
};

module.exports = { getMovies, addMovie, updateMovie, deleteMovie };
