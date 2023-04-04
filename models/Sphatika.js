const mongoose = require('mongoose');
const SpawnAttempt = require('./SpawnAttempt');

const sphatikaSchema = new mongoose.Schema({
    mobs: {
        Asvattha: {
            type: Number,
            default: 0,
            min: 0,
            max: 100,
        },
        Vajrangula: {
            type: Number,
            default: 0,
            min: 0,
            max: 100,
        },
        Pisaca: {
            type: Number,
            default: 0,
            min: 0,
            max: 100,
        },
    },
});

const Sphatika = SpawnAttempt.discriminator('Sphatika', sphatikaSchema);

module.exports = Sphatika;