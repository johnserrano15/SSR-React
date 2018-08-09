import React from 'react'
import Layout from './layouts/default.jsx'
import Home from '../client/home/Home'

const HomeView = props => {
  console.log(props)
  return (
    <Layout title={props.title} page={props.page}>
      <div id='home'>
        <Home />
      </div>
    </Layout>
  )
}

export default HomeView
