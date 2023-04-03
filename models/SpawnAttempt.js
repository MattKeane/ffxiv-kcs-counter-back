const mongoose = require('mongoose');

const spawnAttemptSchema = new mongoose.Schema({
    room: {
        type: String,
        unique: true,
    },
    createdAt: {
        type: Date,
        expires: 43200,
        default: Date.now,
    },
}, {
    statics: {
        async createNew() {
            // creates a new room with a random unique room code
            const alphabet = 'abcdefghijklmnopqrstuvwxyz';
            let room = '';
            while (room.length < 4) {
                const randomChoice = Math.floor(Math.random() * alphabet.length);
                const randomLetter = alphabet[randomChoice];
                room += randomLetter;
                if (room.length === 4) {
                    try {
                        const createdRoom = await this.create({ room });
                        return createdRoom;
                    } catch (err) {
                        if (err.name === 'MongoError' && err.code === 11000) {
                            room = '';
                        }
                    }
                }
            }
        }
    },
    toJSON: {
        transform: function(doc, spawnAttempt) {
            const mobs = [];
            for (const mob in spawnAttempt.mobs) {
                mobs.push({
                    name: mob,
                    count: spawnAttempt.mobs[mob],
                });
            }
            return {
                name: spawnAttempt.__t,
                mobs,
            };
        }
    }
});

const SpawnAttempt = mongoose.model('SpawnAttempt', spawnAttemptSchema);

module.exports = SpawnAttempt;