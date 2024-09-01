import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [movies, setMovies] = useState([]);
    const [theatres, setTheatres] = useState([]);
    const [showtimes, setShowtimes] = useState([]);

    useEffect(() => {
        const fetchAdminData = async () => {
            const movieData = await axios.get('/api/movies');
            const theatreData = await axios.get('/api/theatres');
            const showtimeData = await axios.get('/api/showtimes');
            setMovies(movieData.data);
            setTheatres(theatreData.data);
            setShowtimes(showtimeData.data);
        };

        fetchAdminData();
    }, []);

    return (
        <div className="admin-dashboard">
            <h2>Admin Dashboard</h2>
            <div className="admin-section">
                <h3>Manage Movies</h3>
                <ul>
                    {movies.map(movie => (
                        <li key={movie._id}>{movie.title}</li>
                    ))}
                </ul>
            </div>
            <div className="admin-section">
                <h3>Manage Theatres</h3>
                <ul>
                    {theatres.map(theatre => (
                        <li key={theatre._id}>{theatre.name}</li>
                    ))}
                </ul>
            </div>
            <div className="admin-section">
                <h3>Manage Showtimes</h3>
                <ul>
                    {showtimes.map(showtime => (
                        <li key={showtime._id}>{showtime.startTime}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AdminDashboard;
