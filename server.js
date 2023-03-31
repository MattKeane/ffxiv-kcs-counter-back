if (!process.env.PRODUCTION){
    require('dotenv').config();
}

const express = require('express');

require('./util/db');
const { PORT } = process.env;

const app = express();

app.use(express.json());

app.post('/room/new', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.listen(PORT, () => {
    const d = new Date();
    console.log(`${d.toLocaleString()} now listening on port ${PORT}`);
});