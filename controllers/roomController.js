const Ruminator = require('../models/Ruminator');
const Sphatika = require('../models/Sphatika');
const Ixtab = require('../models/Ixtab');
const Udumbara = require('../models/Udumbara');
const Okina = require('../models/Okina');
const Leucrotta = require('../models/Leucrotta');
const Minhocao = require('../models/Minhocao');

const sRanks = {
    Ruminator,
    Sphatika,
    Ixtab,
    Udumbara,
    Okina,
    Leucrotta,
    Minhocao,
};

async function roomController(req, res) {
    // creates a new room to attempt spawning a given s rank
    try {
        const { sRank } = req.body;
        const newSpawnAttempt = await sRanks[sRank].createNew();
        res.json(newSpawnAttempt)
    } catch (err) {
        console.log(err);
        res.json({ err });
    }    
}

module.exports = roomController;