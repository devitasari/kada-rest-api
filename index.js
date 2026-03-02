const express = require('express')
const mongo = require('./config/connection')
const app = express()
const port = 3000
const UserRoutes = require('./controllers/userController')
const errorHandler = require('./middlewares/errorHandler')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', UserRoutes)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})