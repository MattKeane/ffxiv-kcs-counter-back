const SpawnAttempt = require('../models/SpawnAttempt');

function spawnAttemptHandler(io, socket) {
    const emitUpdate = async (room, mob) => {
        try {
            const updatedRoom = await SpawnAttempt.findOne({ room });
            const mobCount = updatedRoom.mobs[mob];
            io.of('/spawn').to(room).emit(`update:${mob}`, mobCount);
        } catch (err) {
            console.log(err);
        }
    };

    socket.on('joinRoom', async (roomCode, res) => {
        // handles a user joining a room
        try {
            const sRank = await SpawnAttempt.findOne({ room: roomCode });
            if (sRank) {
                socket.join(sRank.room);
                res({
                    sRank,
                    status: 'ok',
                });
            } else {
                res({
                    sRank,
                    status: 'error',
                    error: 'Invalid room code',
                })
            }
        } catch (err) {
            const d = new Date();
            console.log(`${d.toLocaleString()}: Error joining room`);
            console.log(err);
            res({
                sRank: null,
                status: 'error',
                error: err,
            });
        }
    });

    socket.on('increment', async (room, mob, amount) => {
        // handles incrementing (and decrementing) mobs
        try {
            await SpawnAttempt.incrementMob(room, mob, amount);
            emitUpdate(room, mob);
        } catch (err) {
            console.log(err);
        }
    });
}

module.exports = spawnAttemptHandler;