const SpawnAttempt = require('../models/SpawnAttempt');

function spawnAttemptHandler(io, socket) {
    socket.on('joinRoom', async (roomCode, res) => {
        // handles a user joining a room
        try {
            const sRank = await SpawnAttempt.findOne({ room: roomCode });
            socket.join(sRank.room);
            // const mobs = [];
            // for (const mob in spawnAttempt.mobs.toObject()) {
            //     mobs.push({
            //         name: mob,
            //         count: mobs[mob],
            //     });
            // }
            // const sRank = {
            //     mobs,
            //     name: spawnAttempt.__t,
            // };
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
}

module.exports = spawnAttemptHandler;