import React from 'react'
import Layout from './layouts/default.jsx'

// const Saludo = props => {
//   return (
//     <Layout>
//       <h4>Hola soy un mensaje</h4>
//     </Layout>
//   )
// }

function Saludo (props) {
  console.log(props)
  return (
    <Layout>
      <div className='Saludo'>
        <h4>Hola soy un mensaje</h4>
      </div>
    </Layout>
  )
}

// export default Saludo
module.exports = Saludo
