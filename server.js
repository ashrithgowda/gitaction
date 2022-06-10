const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hi Ashrith Gowda Testing')
})

app.get('/test', (req, res) => {
  res.send('new call from github')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
