const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: String,
    team: String,
    salary: Number,
    image: String,
    drafted: Boolean
});

const Players = mongoose.model('Players', playerSchema);

module.exports = Players;
