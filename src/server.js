'use strict'

import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log('Hola mundo server!')
  res.status(200).send('Hola mundo server :)')
})

app.listen(port, () => {
  console.log(`Server on port ${port}`)
})
