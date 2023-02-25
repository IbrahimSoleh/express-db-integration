const express = require('express');
const app = express();

const routes = require('./routes');

// app.get('/', (req, res) => {
//     res.send('hello world!');
// });

app.use(express.json());

app.use('/', routes);

app.listen(5000);