const mongoose = require('mongoose');
const SpawnAttempt = require('./SpawnAttempt');

const ixtabSchema = new mongoose.schema({
    mobs: {
        'Cracked Ronkan Doll': {
            type: Number,
            default: 0,
        },
        'Cracked Ronkan Thorn': {
            type: Number,
            default: 0,
        },
        'Cracked Ronkan Vessel': {
            type: Number,
            default: 0,
        },
    }
});

const Ixtab = SpawnAttempt.discriminator('Ixtab', ixtabSchema);

module.exports = Ixtab;