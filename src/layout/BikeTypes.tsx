import React from 'react'
import BikeTypeCard from '../components/BikeTypeCard'
import { SBikeTypes } from '../components/styledComponents'

const BikeTypes = () => {
  return (
    <SBikeTypes>
      <h2 className='title'>Other Type of Bikes</h2>
      <div className="bike-types">
        <BikeTypeCard />
        <BikeTypeCard />
        <BikeTypeCard />
        <BikeTypeCard />
        <BikeTypeCard grayed={true} />
      </div>
    </SBikeTypes>
  )
}

export default BikeTypes
