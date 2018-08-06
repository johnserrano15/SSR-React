// import React from 'react'
// // import { render } from 'react-dom'
// import { hydrate } from 'react-dom'
// import './home.sass'
// import Home from './Home'

// const app = document.getElementById('app')

// hydrate(<Home saludo='Hola mundo' />, app)

import './home.sass'

import client from 'react-engine/lib/client'
// require('./views/home.jsx', { glob: true })

// boot options
const options = {
  viewResolver: viewName => require('./views/' + viewName)
}

// finally, boot whenever your app is ready
document.addEventListener('DOMContentLoaded', function onLoad () {
  // `onBoot` - Function (optional)
  // returns data that was used
  // during rendering as the first argument
  // the second argument is the `history` object that was created behind the scenes
  // (only available while using react-router)
  client.boot(options)
})
