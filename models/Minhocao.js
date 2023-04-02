const mongoose = require('mongoose');
const SpawnAttempt = require('./SpawnAttempt');

const minhocaoSchema = new mongoose.Schema({
    mobs: {
        'Earth Sprite': {
            type: Number,
            default: 0,
        }
    }
});

const Minhocao = SpawnAttempt.discriminator('Minhocao', minhocaoSchema);

module.exports = Minhocao;