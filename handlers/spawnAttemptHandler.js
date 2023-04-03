const SpawnAttempt = require('../models/SpawnAttempt');

function spawnAttemptHandler(io, socket) {
    socket.on('joinRoom', async (roomCode, res) => {
        // handles a user joining a room
        try {
            const sRank = await SpawnAttempt.findOne({ room: roomCode });
            socket.join(sRank.room);
            res({
                sRank,
                status: 'ok',
            });
        } catch (err) {
            const d = new Date();
            console.log(`${d.toLocaleString()}: Error joining room`);
            console.log(err);
            res({
                sRank: null,
                status: 'error'
            });
        }
    })

    socket.on('increment', async (room, mob, amount) => {
        // handles incrementing mobs
        try {
            console.log(room);
            console.log(mob);
            console.log(amount);
            const mobField = `mobs.${mob}`;
            console.log(mobField);
            const roomToUpdate = await SpawnAttempt.findOne({ room })
            roomToUpdate.$inc(mobField, amount);
            await roomToUpdate.save();
            console.log(roomToUpdate);
        } catch (err) {
            console.log(err);
        }
    })
}

module.exports = spawnAttemptHandler;