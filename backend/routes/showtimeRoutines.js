const express = require('express');
const { getShowtimes, addShowtime, updateShowtime, deleteShowtime } = require('../controllers/showtimeController');
const router = express.Router();

router.route('/').get(getShowtimes).post(addShowtime);
router.route('/:id').put(updateShowtime).delete(deleteShowtime);

module.exports = router;
