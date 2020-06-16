const express = require('express');
const router = express.Router();
const Players = require('../models/player.js');

router.post('/', (req, res) => {
    console.log(req.body);
    req.body.adopted = false;
    Players.create(req.body, (err, createdPlayer) => {
        res.json(createdPlayer);
    });
});

router.delete('/:id', (req, res) => {
    Players.findByIdAndRemove(req.params.id, (err, deletedPlayer) => {
        res.json(deletedPlayer);
    });
});

router.put('/:id', (req, res) => {
    Players.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedPlayer) => {
            res.json(updatedPlayer);
        }
    );
});

router.get('/', (req, res) => {
    Players.find({}, (err, foundPlayers) => {
        res.json(foundPlayers);
    });
});

module.exports = router;