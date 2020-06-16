const express = require('express');
const router = express.Router();
const Players = require('../models/player.js');

router.post('/', (req, res) => {
    console.log(req.body);
    req.body.adopted = false;
    Players.create(req.body, (err, createdPlayer) => {
        Players.find({}, (err, foundPlayers) => {
            res.json(foundPlayers);
        });
    })
});

router.delete('/:id', (req, res) => {
    Players.findByIdAndRemove(req.params.id, (err, deletedPlayer) => {
        Players.find({}, (err, foundPlayers) => {
            res.json(foundPlayers);
        })
    });
});

router.put('/:id', (req, res) => {
    Players.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedPlayer) => {
            Players.find({}, (err, foundPlayers) => {
                res.json(foundPlayers);
            })
        }
    );
});

router.get('/', (req, res) => {
    Players.find({}, (err, foundPlayers) => {
        res.json(foundPlayers);
    });
});

module.exports = router;