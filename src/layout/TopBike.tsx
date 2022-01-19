// import React from 'react'
import { OutlinedButton, STopBike } from '../components/styledComponents'
// import TopBikeImg from "../assets/bike.png"
import BikeCard from '../components/BikeCard'
import BlogImg from "../assets/blob.png"
import LottieImg from "../assets/Rider-lottie.json"

const TopBike = () => {
  return (
    <STopBike>
      <img src={BlogImg} alt="blob" className="blob" />
      <div className="bike-card">
        <BikeCard isLottie={true} imageLink={LottieImg} />
      </div>
      <div className="information">
        <h2 className="bike-name">Hybrids</h2>
        <p className="paragraph">
          Dummy Text progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride
          in the solutions we deliver
        </p>
        <div className="action">
          <OutlinedButton>Learn More</OutlinedButton>
        </div>
      </div>

    </STopBike>
  )
}

export default TopBike
