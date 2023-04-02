if (!process.env.PRODUCTION){
    require('dotenv').config();
}

const express = require('express');

const Ruminator = require('./models/Ruminator');

require('./util/db');
const { PORT } = process.env;

const app = express();

app.use(express.json());

app.post('/room/new', async (req, res) => {
    try {
        const newSpawnAttempt = await Ruminator.createNew();
        console.log(newSpawnAttempt);
        res.json(newSpawnAttempt)
    } catch (err) {
        console.log(err);
        res.json({ err });
    }
});

app.listen(PORT, () => {
    const d = new Date();
    console.log(`${d.toLocaleString()} now listening on port ${PORT}`);
});