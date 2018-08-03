import './home.sass'
import React, { Component } from 'react'
import { render } from 'react-dom'

class Home extends Component {
  render () {
    return (
      <section className='Home'>
        <h2>Hola mundo :)</h2>
      </section>
    )
  }
}

const App = document.getElementById('home')

render(<Home />, App)
