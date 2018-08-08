import express from 'express'
// import React from 'react'
// import { renderToString } from 'react-dom/server'
import reactViews from 'express-react-views'
import path from 'path'
// import Home from './client/Home'
// import Html from './client/Html'

const app = express()
const port = 3000

app.use(express.static('dist/public'))

app.set('views', path.resolve(__dirname, 'client/views'))
app.set('view engine', 'jsx')
const options = { transformViews: false }
app.engine('jsx', reactViews.createEngine(options))

app.get('/', (req, res) => {
  // console.log('Hola mundo server!')
  // res.status(200).send('Hola mundo server :)')
  const title = 'Server side Rendering with Styled Components'
  res.render('home', { title: title })
})

app.get('/saludo', (req, res) => {
  // console.log(req.params.id)
  const data = {
    id: 12345,
    name: 'John Serrano',
    saludo: 'Hola'
  }
  // res.status(200).send('Hola mundo server :)')
  res.render('saludo', data)
})

app.listen(port, () => {
  console.log(`Server on port ${port}`)
})
