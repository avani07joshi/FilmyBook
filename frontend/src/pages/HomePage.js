import React from 'react';
import MovieList from '../components/MovieList';

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Welcome to the Movie Booking App</h1>
            <MovieList />
        </div>
    );
};

export default HomePage;
