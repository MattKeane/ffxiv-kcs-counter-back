const mongoose = require('mongoose');
const SpawnAttempt = require('./SpawnAttempt');

const udumbaraSchema = new mongoose.Schema({
    mobs: {
        Leshy: {
            type: Number,
            default: 0,
        },
        Diakka: {
            type: Number,
            default: 0,
        },
    }
});

const Udumbara = SpawnAttempt.discriminator('Udumbara', udumbaraSchema);

module.exports = Udumbara;