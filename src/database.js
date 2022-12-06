const mongoose = require('mongoose')

// Connecting mongoDB Database
mongoose
  .connect(process.env.MONGO_DB_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })