import React from 'react'
import BikeCard from '../components/BikeCard'
import { SFeaturedBikes } from '../components/styledComponents'

const FeaturedBikes = () => {
  return (
    <SFeaturedBikes>
      <BikeCard />
      <BikeCard />
      <BikeCard />
    </SFeaturedBikes>
  )
}

export default FeaturedBikes
