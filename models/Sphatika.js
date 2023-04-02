const mongoose = require('mongoose');
const SpawnAttempt = require('./SpawnAttempt');

const sphatikaSchema = new mongoose.Schema({
    mobs: {
        Asvattha: {
            type: Number,
            default: 0,
        },
        Vajrangula: {
            type: Number,
            default: 0,
        },
        Pisaca: {
            type: Number,
            default: 0,
        },
    },
});

const Sphatika = SpawnAttempt.discriminator('Sphatika', sphatikaSchema);

module.exports = Sphatika;