import React, { Component } from 'react'

class Home extends Component {
  constructor (props) {
    super(props)
    this.hola = 'hola mundo'
    this.state = {
      message: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({
      message: 'Nuevo mensaje'
    })
  }

  render () {
    return (
      <div className='Home'>
        <h2>Hola mundo :)</h2>
        <h4>{this.props.saludo}</h4>
        <button onClick={this.handleClick}>Click me!</button>
        <div id='message'>{this.state.message}</div>
      </div>
    )
  }
}

export default Home
