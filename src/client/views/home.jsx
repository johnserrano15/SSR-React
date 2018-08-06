import React from 'react'
import Layout from './layouts/default.jsx'
import Home from '../Home.js'

module.exports = props => {
  console.log(props)
  return (
    <Layout title='Home'>
      {/* <div id='app' /> */}
      <Home />
    </Layout>
  )
}
