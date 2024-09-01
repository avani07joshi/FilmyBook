import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const { data } = await axios.get(`/api/movies/${id}`);
            setMovie(data);
        };

        fetchMovieDetails();
    }, [id]);

    return (
        <div className="movie-details">
            <h2>{movie.title}</h2>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Release Date:</strong> {movie.releaseDate}</p>
            <p><strong>Description:</strong> {movie.description}</p>
        </div>
    );
};

export default MovieDetails;
