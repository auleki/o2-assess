import React from 'react'
import { Header, Layout, Reviews } from '../layout'
import FeaturedBikes from '../layout/FeaturedBikes'
import BikeTypes from '../layout/BikeTypes'
import TopBike from '../layout/TopBike'
import ScrollToTop from '../components/ScrollToTop'

const Home = () => {
  return (
    <Layout>
      <Header />
      <FeaturedBikes />
      <BikeTypes />
      <TopBike />
      <Reviews />
      <ScrollToTop />
    </Layout>
  )
}

export default Home
