if (!process.env.PRODUCTION){
    require('dotenv').config();
}

const express = require('express');

const Ruminator = require('./models/Ruminator');
const Sphatika = require('./models/Sphatika');
const Ixtab = require('./models/Ixtab');
const Udumbara = require('./models/Udumbara');
const Okina = require('./models/Okina');
const Leucrotta = require('./models/Leucrotta');
const Minhocao = require('./models/Minhocao');

require('./util/db');
const { PORT } = process.env;

const app = express();

app.use(express.json());

app.post('/room/new', async (req, res) => {
    try {
        const sRanks = {
            Ruminator,
            Sphatika,
            Ixtab,
            Udumbara,
            Okina,
            Leucrotta,
            Minhocao,
        };
        const { sRank } = req.body;
        const newSpawnAttempt = await sRanks[sRank].createNew();
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