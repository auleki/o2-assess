import React from 'react'
import BikeTypeImg from '../assets/bike-type-1.png'
import { SBikeTypeCard } from './styledComponents'

const BikeTypeCard = () => {
  return (
    <SBikeTypeCard>
      <div className="bike-image">
        <img src={BikeTypeImg} alt="bike type" />
      </div>
      <h3 className="bike-type">Hybrid</h3>
    </SBikeTypeCard>
  )
}

export default BikeTypeCard
