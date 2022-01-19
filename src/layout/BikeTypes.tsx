import React from 'react'
import BikeTypeCard from '../components/BikeTypeCard'
import { SBikeTypes } from '../components/styledComponents'
import BikeTypeImg from "../assets/bike-type-1.png"

const BikeTypes = () => {
  return (
    <SBikeTypes>
      <h2 className='title'>Other Type of Bikes</h2>
      <div className="bike-types">
        <BikeTypeCard imageLink={BikeTypeImg} />
        <BikeTypeCard imageLink={BikeTypeImg} />
        <BikeTypeCard imageLink={BikeTypeImg} />
        <BikeTypeCard imageLink={BikeTypeImg} />
        <BikeTypeCard grayed={true} imageLink={BikeTypeImg} />
      </div>
    </SBikeTypes>
  )
}

export default BikeTypes
