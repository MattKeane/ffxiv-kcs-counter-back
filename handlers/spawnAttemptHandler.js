const SpawnAttempt = require('../models/SpawnAttempt');

function spawnAttemptHandler(io, socket) {
    socket.on('joinRoom', async (roomCode, res) => {
        try {
            const spawnAttempt = await SpawnAttempt.findOne({ room: roomCode });
            socket.join(spawnAttempt.room);
            res({
                spawnAttempt,
                status: 'ok',
            });
        } catch (err) {
            const d = new Date();
            console.log(`${d.toLocaleString()}: Error joining room`);
            console.log(err);
            res({
                spawnAttempt: null,
                status: 'error'
            });
        }
    })
}

module.exports = spawnAttemptHandler;