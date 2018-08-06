import express from 'express'
// import React from 'react'
// import { renderToString } from 'react-dom/server'
import engine from 'react-engine'
import path from 'path'
// import Home from './client/Home'
// import Html from './client/Html'

const app = express()
const port = 3000

app.use(express.static('dist/public'))

// definimos el engine para archivos jsx
app.engine('.jsx', engine.server.create())
// configuramos la ruta a las vistas
app.set('views', path.resolve(__dirname, 'client/views'))
// indicamos que el engine a usar es el de archivos jsx
app.set('view engine', 'jsx')
// le indicamos que use react-engine como engine de nuestras vistas
app.set('view', engine.expressView)

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
