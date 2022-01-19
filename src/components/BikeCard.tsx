import { SBikeCard } from './styledComponents'
import BikeImg from "../assets/bike.png"
import Button from './Button'
import LottieImage from './LottieImage'
import BikeLottie from "../assets/Rider-lottie.json"

const BikeCard = () => {
  return (
    <SBikeCard>
      <h2 className="title">Universal eBike Kit</h2>
      <div className="image">
        {/* <img src={BikeImg} alt="bike" /> */}
        <LottieImage image={BikeLottie} />
      </div>
      <div className="more-info">
        <div className="price-info">
          <span className="tag">Price</span>
          <span className="price">$750</span>
        </div>
        <div className="order">
          <Button>Order</Button>
        </div>
      </div>
    </SBikeCard>
  )
}

export default BikeCard
