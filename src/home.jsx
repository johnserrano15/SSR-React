import './home.sass'
import React, { Component } from 'react'
import { render } from 'react-dom'

class Home extends Component {
  constructor (props) {
    super(props)
    this.hola = 'hola mundo'
  }

  render () {
    return (
      <section className='Home'>
        <h2>Hola mundo :)</h2>
        <h4>{this.props.saludo}</h4>
      </section>
    )
  }
}

const App = document.getElementById('home')

render(<Home saludo='Hola mundo' />, App)
