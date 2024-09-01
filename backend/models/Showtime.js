const mongoose = require('mongoose');

const showtimeSchema = new mongoose.Schema({
    movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
    theatre: { type: String, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    seatsAvailable: { type: Number, required: true },
    price: { type: Number, required: true }
});

const Showtime = mongoose.model('Showtime', showtimeSchema);
module.exports = Showtime;
