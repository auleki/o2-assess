import { SBikeCard } from './styledComponents'
// import BikeImg from "../assets/bike.png"
import Button from './Button'
import LottieImage from './LottieImage'
import { BikeCardProps } from '../global'

const BikeCard = ({ grayed, isLottie, imageLink }: BikeCardProps) => {
  return (
    <SBikeCard grayed={grayed}>
      <h2 className="title">Universal eBike Kit</h2>
      <div className="image">
        {isLottie ?
          (<LottieImage image={imageLink} />)
          :
          (<img src={imageLink} alt="bike" />)
        }
      </div>
      <div className="more-info">
        <div className="price-info">
          <span className="tag">Price</span>
          <span className="price">$750</span>
        </div>
        {/* <div className="order"> */}
        <Button>Order</Button>
        {/* </div> */}
      </div>
    </SBikeCard>
  )
}

export default BikeCard
