const mongoose = require('mongoose');
const SpawnAttempt = require('./SpawnAttempt');

const okinaSchema = new mongoose.Schema({
    mobs: {
        'Yumemi': {
            type: Number,
            default: 0,
        },
        'Naked Yumemi': {
            type: Number,
            default: 0,
        },
    }
});

const Okina = SpawnAttempt.discriminator('Okina', okinaSchema);

module.exports = Okina;