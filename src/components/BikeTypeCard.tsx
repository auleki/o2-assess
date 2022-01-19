import React from 'react'
import BikeTypeImg from '../assets/bike-type-1.png'
import { BikeCardProps, BikeCardStyleProps } from '../global'
import { SBikeTypeCard } from './styledComponents'

const BikeTypeCard = ({ grayed }: BikeCardProps) => {
  return (
    <SBikeTypeCard grayed={grayed}>
      <div className="bike-image">
        <img src={BikeTypeImg} alt="bike type" />
      </div>
      <h3 className="bike-type">Hybrid</h3>
    </SBikeTypeCard>
  )
}

export default BikeTypeCard
