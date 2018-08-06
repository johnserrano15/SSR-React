// import React from 'react'
// // import { render } from 'react-dom'
// import { hydrate } from 'react-dom'
// import './home.sass'
// import Home from './Home'

// const app = document.getElementById('app')

// hydrate(<Home saludo='Hola mundo' />, app)

'use strict'

// import the react-engine's client side booter
import client from 'react-engine/lib/client'
import './home.sass'
// require('../views/home.jsx', { glob: true })
// boot options
const options = {
  viewResolver: viewName => require('./views/' + viewName)
}

document.addEventListener('DOMContentLoaded', () => {
  // boot the app when the DOM is ready
  client.boot(options)
})
