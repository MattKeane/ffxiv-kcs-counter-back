const mongoose = require('mongoose');
const SpawnAttempt = require('./SpawnAttempt');

const leucrottaSchema = new mongoose.Schema({
    mobs: {
        'Allagan Chimera': {
            type: Number,
            default: 0,
        },
        'Meracydian Vouivre': {
            type: Number,
            default: 0,
        },
        'Lesser Hydra': {
            type: Number,
            default: 0,
        },
    }
});

const Leucrotta = SpawnAttempt.discriminator('Leucrotta', leucrottaSchema);

module.exports = Leucrotta;