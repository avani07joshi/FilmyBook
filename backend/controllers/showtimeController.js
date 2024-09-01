const Showtime = require('../models/Showtime');

const getShowtimes = async (req, res) => {
    const showtimes = await Showtime.find().populate('movie');
    res.json(showtimes);
};

const addShowtime = async (req, res) => {
    const { movie, theatre, startTime, endTime, seatsAvailable, price } = req.body;

    const showtime = new Showtime({
        movie,
        theatre,
        startTime,
        endTime,
        seatsAvailable,
        price
    });

    const createdShowtime = await showtime.save();
    res.status(201).json(createdShowtime);
};

const updateShowtime = async (req, res) => {
    const { movie, theatre, startTime, endTime, seatsAvailable, price } = req.body;

    const showtime = await Showtime.findById(req.params.id);

    if (showtime) {
        showtime.movie = movie;
        showtime.theatre = theatre;
        showtime.startTime = startTime;
        showtime.endTime = endTime;
        showtime.seatsAvailable = seatsAvailable;
        showtime.price = price;

        const updatedShowtime = await showtime.save();
        res.json(updatedShowtime);
    } else {
        res.status(404).json({ message: 'Showtime not found' });
    }
};

const deleteShowtime = async (req, res) => {
    const showtime = await Showtime.findById(req.params.id);

    if (showtime) {
        await showtime.remove();
        res.json({ message: 'Showtime removed' });
    } else {
        res.status(404).json({ message: 'Showtime not found' });
    }
};

module.exports = { getShowtimes, addShowtime, updateShowtime, deleteShowtime };
