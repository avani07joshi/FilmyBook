import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const { data } = await axios.get('/api/movies');
            setMovies(data);
        };

        fetchMovies
