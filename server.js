if (!process.env.PRODUCTION){
    require('dotenv').config();
}

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

require('./util/db');
const { PORT } = process.env;

const app = express();
const server = http.createServer(app);

app.use(express.json());

// socket.io
const io = new Server(server);

const spawnAttemptHandler = require('./handlers/spawnAttemptHandler');
io.of('/spawn').on('connection', socket => spawnAttemptHandler(io, socket));

// REST
const roomController = require('./controllers/roomController');
app.post('/room/new', roomController);

server.listen(PORT, () => {
    const d = new Date();
    console.log(`${d.toLocaleString()} now listening on port ${PORT}`);
});