require('dotenv').config()

const express = require('express')
const mongo = require('./config/connection')
const app = express()
const port = 3000
const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', routes)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})