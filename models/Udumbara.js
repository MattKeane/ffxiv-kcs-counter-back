const mongoose = require('mongoose');
const SpawnAttempt = require('./SpawnAttempt');

const udumbaraSchema = new mongoose.Schema({
    mobs: {
        Leshy: {
            type: Number,
            default: 0,
            min: 0,
            max: 100,
        },
        Diakka: {
            type: Number,
            default: 0,
            min: 0,
            max: 100,
        },
    }
});

const Udumbara = SpawnAttempt.discriminator('Udumbara', udumbaraSchema);

module.exports = Udumbara;