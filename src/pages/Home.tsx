import React from 'react'
import { Header, Layout } from '../layout'
import FeaturedBikes from '../layout/FeaturedBikes'
import BikeTypes from '../layout/BikeTypes'
import TopBike from '../layout/TopBike'

const Home = () => {
  return (
    <Layout>
      <Header />
      <FeaturedBikes />
      <BikeTypes />
      <TopBike />
    </Layout>
  )
}

export default Home
