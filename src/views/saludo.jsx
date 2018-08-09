import React from 'react'
import Layout from './layouts/default.jsx'
import Saludo from '../client/saludo/Saludo'

const SaludoView = props => {
  // console.log(props)
  return (
    <Layout title={props.title} page={props.page}>
      <div id='saludo'>
        <Saludo saludo={props.saludo} />
      </div>
    </Layout>
  )
}

export default SaludoView
