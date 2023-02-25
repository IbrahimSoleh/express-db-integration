const pool = require('./db');

const dvdRental_actor = (req, res) => {
    const query_actor = "SELECT * FROM actor";
    pool.query(query_actor, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};
const dvdRental_film = (req, res) => {
    const query_film = "SELECT * FROM film";
    pool.query(query_film, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const dvdRental_film_id = (req, res) => {
    const film_id = req.params.film_id;
    const query_film_id = `SELECT * FROM film WHERE film_id = $1`;
    pool.query(query_film_id, [film_id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows[0]);
    });
};
const dvdRental_category = (req, res) => {
    const query_category = "SELECT * FROM category";
    pool.query(query_category, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};
const dvdRental_film_category = (req, res) => {
    const category_id = req.params.category_id;
    const query_film_category = `SELECT
    c.category_id,
    c.name category_name,
    f.film_id,
    f.title film_title,
    f.description film_description
FROM
    category c
INNER JOIN film_category fc
    ON fc.category_id = c.category_id
INNER JOIN film f 
    ON fc.film_id = f.film_id
WHERE fc.category_id = $1`;
    pool.query(query_film_category, [category_id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};
module.exports = {
    dvdRental_actor,
    dvdRental_film,
    dvdRental_film_id,
    dvdRental_category,
    dvdRental_film_category,
};