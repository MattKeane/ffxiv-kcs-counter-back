if (!process.env.PRODUCTION){
    require('dotenv').config();
}

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

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
const server = http.createServer(app);

app.use(express.json());

const io = new Server(server);

const spawnAttemptHandler = require('./handlers/spawnAttemptHandler');
io.of('/spawn').on('connection', socket => spawnAttemptHandler(io, socket));

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
        res.json(newSpawnAttempt)
    } catch (err) {
        console.log(err);
        res.json({ err });
    }
});

server.listen(PORT, () => {
    const d = new Date();
    console.log(`${d.toLocaleString()} now listening on port ${PORT}`);
});