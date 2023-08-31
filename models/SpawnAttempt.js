const mongoose = require('mongoose');

// This is the base model for all S rank spawn attempts
// Specific S ranks are created as discriminators of this model
// The schema for a specific S rank should be an object with a "mobs" property
// The "mobs" property itself should be an object with properties named for each mob required
// Those properties should each be Numbers

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
        },
        async incrementMob(room, mob, amount) {
            // increments a mob's count by a given amount
            const mobField = `mobs.${mob}`;
            try {
                const roomToUpdate = await this.findOne({ room });
                roomToUpdate.$inc(mobField, amount);
                return roomToUpdate.save();
            } catch (err) {
                throw new Error(err);
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
                room: spawnAttempt.room,
                name: spawnAttempt.__t,
                mobs,
            };
        }
    }
});

const SpawnAttempt = mongoose.model('SpawnAttempt', spawnAttemptSchema);

module.exports = SpawnAttempt;