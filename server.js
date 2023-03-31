const express = require('express');

if (!process.env.PRODUCTION){
    require('dotenv').config();
}

const { PORT } = process.env;

const app = express();

app.get('/', (req, res) => {
    res.send('hi');
});

app.listen(PORT, () => {
    const d = new Date();
    console.log(`${d.toLocaleString()} now listening on port ${PORT}`);
});