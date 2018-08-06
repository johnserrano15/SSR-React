import React from 'react'
import Layout from './layouts/default.jsx'
import Home from '../Home.js'

const john = props => {
  console.log(props)
  return (
    <Layout title={props.title}>
      <Home />
    </Layout>
  )
}

// export default john
module.exports = john
