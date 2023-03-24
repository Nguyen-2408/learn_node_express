const express = require('express')
const app = express()
require('dotenv').config()

const port = process.env.PORT
console.log(port)

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/test', function (req, res) {
    res.send('Hello World test1')
  })

app.listen(port)