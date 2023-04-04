const mongoose = require('mongoose');
const SpawnAttempt = require('./SpawnAttempt');

const okinaSchema = new mongoose.Schema({
    mobs: {
        'Yumemi': {
            type: Number,
            default: 0,
            min: 0,
            max: 100,
        },
        'Naked Yumemi': {
            type: Number,
            default: 0,
            min: 0,
            max: 100,
        },
    }
});

const Okina = SpawnAttempt.discriminator('Okina', okinaSchema);

module.exports = Okina;