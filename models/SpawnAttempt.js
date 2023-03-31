const mongoose = require('mongoose');

const spawnAttemptSchema = new mongoose.Schema({
    room: String,
    sRank: String,
    mobs: [{
        name: String,
        count: Number,
    }],
    createdAt: {
        type: Date,
        expires: 43200,
        default: Date.now,
    }
});

const SpawnAttempt = mongoose.model('SpawnAttempt', spawnAttemptSchema);

module.exports = SpawnAttempt;