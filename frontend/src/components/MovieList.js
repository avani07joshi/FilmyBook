import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const { data } = await axios.get('/api/movies');
            setMovies(data);
        };

        fetchMovies();
    }, []);

    return (
        <div className="movie-list">
            <h2>Available Movies</h2>
            <ul>
                {movies.map(movie => (
                    <li key={movie._id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.genre}</p>
                        <p>{movie.description}</p>
                        <p>{movie.releaseDate}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;
