const mongoose = require('mongoose');
const SpawnAttempt = require('./SpawnAttempt');

const ruminatorSchema = new mongoose.Schema({
    mobs: {
        Weeper: {
            type: Number,
            default: 0,
        },
        Thinker: {
            type: Number,
            default: 0,
        },
        Wanderer: {
            type: Number,
            default: 0,
        },
    },
});

const Ruminator = SpawnAttempt.discriminator('Ruminator', ruminatorSchema);

module.exports = Ruminator;