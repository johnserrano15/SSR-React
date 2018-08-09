import React from 'react'
// // import { render } from 'react-dom'
import { hydrate } from 'react-dom'
import './home.sass'
import Home from './Home'

const home = document.getElementById('home')

hydrate(<Home saludo='Hola mundo' />, home)
