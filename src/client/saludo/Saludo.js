import React from 'react'

const Saludo = props => {
  console.log(props)
  return (
    <div className='Saludo'>
      <h3>Hola soy un {props.saludo}</h3>
    </div>
  )
}

export default Saludo
