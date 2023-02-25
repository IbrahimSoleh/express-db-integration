const pool = require('../db');
const fs = require('fs');

const seedQuerry = fs.readFileSync('seeding_db/seeding.sql', { encoding: 'utf8'});
pool.query(seedQuerry, (err, res) => {
    console.log(err);
    console.log("seed complete");
    pool.end();
});

console.log(seedQuerry);