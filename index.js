require('dotenv').config()

const passport = require('./helpers/passport')
const express = require('express')
const mongo = require('./config/connection')
const app = express()
const port = 3001
const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler')
const { connectRabbitMQ } = require('./helpers/rabbitmq')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// connectRabbitMQ()

app.use(passport.initialize())

app.use('/', routes)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})