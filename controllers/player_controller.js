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

router.get('/seed', (req, res) => {
  Players.create(
    [
      {
        name: 'Tom Brady',
        team: 'Buccaneers',
        salary: 25,
        image: 'https://tinyurl.com/ycmyttv4',
        drafted: false
      },
      {
        name: 'Rob Gronkowski',
        team: 'Buccaneers',
        salary: 20,
        image: 'https://tinyurl.com/y7w9d6aj',
        drafted: false
      },
      {
        name: 'Julian Edelman',
        team: 'Patriots',
        salary: 15,
        image: 'https://tinyurl.com/ycvgj7ya',
        drafted: false
      },
      {
        name: 'Mike Evans',
        team: 'Buccaneers',
        salary: 20,
        image: 'https://tinyurl.com/y9ffzxof',
        drafted: false
      },
      {
        name: 'Chris Godwin',
        team: 'Buccaneers',
        salary: 20,
        image: 'https://tinyurl.com/y7wbre7u',
        drafted: false
      },
      {
        name: 'https://tinyurl.com/ybxh8clr',
        team: 'Buccaneers',
        salary: 10,
        image: 'https://tinyurl.com/ybxh8clr',
        drafted: false
      }
    ]
  )
})

module.exports = router;
