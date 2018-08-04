import React from 'react'
// import { render } from 'react-dom'
import { hydrate } from 'react-dom'
import './home.sass'
import Home from './Home'

const app = document.getElementById('app')

hydrate(<Home saludo='Hola mundo' />, app)
