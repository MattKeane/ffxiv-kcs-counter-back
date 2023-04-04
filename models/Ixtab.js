const mongoose = require('mongoose');
const SpawnAttempt = require('./SpawnAttempt');

const ixtabSchema = new mongoose.Schema({
    mobs: {
        'Cracked Ronkan Doll': {
            type: Number,
            default: 0,
            min: 0,
            max: 100,
        },
        'Cracked Ronkan Thorn': {
            type: Number,
            default: 0,
            min: 0,
            max: 100,
        },
        'Cracked Ronkan Vessel': {
            type: Number,
            default: 0,
            min: 0,
            max: 100,
        },
    }
});

const Ixtab = SpawnAttempt.discriminator('Ixtab', ixtabSchema);

module.exports = Ixtab;