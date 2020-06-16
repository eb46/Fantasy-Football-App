// Dependencies
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 3000

// Middleware
app.use(express.json())
app.use(express.static('public'))

// Controllers
const footballController = require('./controllers/player_controller.js')
app.use('/football', footballController)


mongoose.connect('mongodb://localhost:27017/fantasyfootball',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

mongoose.connection.on('open', () => {
  console.log(`connected to mongod...`);
})

app.listen(PORT, () => {
  console.log(`We're here...`);
})
