const express = require('express')
const mongo = require('./config/connection')
const app = express()
const port = 3000
const ProductRoutes = require('./controllers')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', ProductRoutes)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})