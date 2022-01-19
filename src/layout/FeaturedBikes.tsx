// import React from 'react'
import BikeCard from '../components/BikeCard'
// import Button from '../components/Button'
import { icons } from '../components/constants'
import IconButton from '../components/IconButton'
import { SFeaturedBikes } from '../components/styledComponents'
import BlogImg from "../assets/blob-2.png"

const FeaturedBikes = () => {
  return (
    <SFeaturedBikes>
      <img src={BlogImg} alt="blog" className="blob" />
      <div className="bikes">
        <BikeCard />
        <BikeCard />
        <BikeCard grayed={true} />
      </div>
      <div className="navigation">
        <div className="buttons">
          <IconButton inActive={true}>
            <icons.leftArrow />
          </IconButton>
          <IconButton><icons.rightArrow /></IconButton>
        </div>
      </div>
    </SFeaturedBikes>
  )
}

export default FeaturedBikes
