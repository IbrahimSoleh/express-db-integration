const express = require('express');
const query = require('./query');

const router = express.Router();

router.get('/dvdrental/actor', query.dvdRental_actor);
router.get('/dvdrental/film', query.dvdRental_film);
router.get('/dvdrental/film/id/:film_id', query.dvdRental_film_id);
router.get('/dvdrental/category', query.dvdRental_category);
router.get('/dvdrental/film/category/:category_id', query.dvdRental_film_category);
module.exports = router;