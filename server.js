if (!process.env.PRODUCTION){
    require('dotenv').config();
}

const express = require('express');
const http = require('http');
const path = require('path');
const favicon = require('serve-favicon');
const { Server } = require('socket.io');

require('./util/db');
const { PORT } = process.env;

const app = express();
const server = http.createServer(app);

//  Middleware 
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// socket.io
const io = new Server(server);

const spawnAttemptHandler = require('./handlers/spawnAttemptHandler');
io.of('/spawn').on('connection', socket => spawnAttemptHandler(io, socket));

// REST
const roomController = require('./controllers/roomController');
app.post('/room/new', roomController);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server.listen(PORT, () => {
    const d = new Date();
    console.log(`${d.toLocaleString()} now listening on port ${PORT}`);
});