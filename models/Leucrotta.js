const mongoose = require('mongoose');
const SpawnAttempt = require('./SpawnAttempt');

const leucrottaSchema = new mongoose.Schema({
    mobs: {
        'Allagan Chimera': {
            type: Number,
            default: 0,
            min: 0,
            max: 100,
        },
        'Meracydian Vouivre': {
            type: Number,
            default: 0,
            min: 0,
            max: 100,
        },
        'Lesser Hydra': {
            type: Number,
            default: 0,
            min: 0,
            max: 100,
        },
    }
});

const Leucrotta = SpawnAttempt.discriminator('Leucrotta', leucrottaSchema);

module.exports = Leucrotta;