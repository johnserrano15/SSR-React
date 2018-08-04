import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Home from './client/Home'
import Html from './client/Html'

const app = express()
const port = 3000

app.use(express.static('dist/public'))

app.get('/', (req, res) => {
  console.log('Hola mundo server!')
  // res.status(200).send('Hola mundo server :)')
  const body = renderToString(<Home saludo='Hola mundo' />)
  const title = 'Server side Rendering with Styled Components'
  console.log(body)
  res.send(
    Html({
      body,
      title
    })
  )
})

app.listen(port, () => {
  console.log(`Server on port ${port}`)
})
