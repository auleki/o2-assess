import React from 'react'
import { STopBike } from '../components/styledComponents'
import TopBikeImg from "../assets/bike.png"
import Button from '../components/Button'
import BikeCard from '../components/BikeCard'

const TopBike = () => {
  return (
    <STopBike>
      <div className="bike-card">
        <BikeCard />
      </div>
      <div className="information">
        <h2 className="bike-name">Bike Name</h2>
        <p className="paragraph">
          Dummy Text progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride
          in the solutions we deliver
        </p>
        <div className="action">
          <Button>Learn More</Button>
        </div>
      </div>
    </STopBike>
  )
}

export default TopBike
