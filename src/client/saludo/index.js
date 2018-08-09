import React from 'react'
import { render } from 'react-dom'
// import { hydrate } from 'react-dom'
// import './home.sass'
import Saludo from './Saludo'

const saludo = document.getElementById('saludo')

// hydrate(<Saludo saludo='John Serrano' />, saludo)
render(<Saludo saludo='John Serrano' />, saludo)
