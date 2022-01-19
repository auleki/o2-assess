import BikeCard from '../components/BikeCard'
import { icons } from '../components/constants'
import IconButton from '../components/IconButton'
import { SFeaturedBikes } from '../components/styledComponents'
import BlogImg from "../assets/blob-2.png"
import BikeImg from "../assets/bike.png"

const FeaturedBikes = () => {
  return (
    <SFeaturedBikes>
      <img src={BlogImg} alt="blog" className="blob" />
      <div className="bikes">
        <BikeCard imageLink={BikeImg} />
        <BikeCard imageLink={BikeImg} />
        <BikeCard grayed={true} imageLink={BikeImg} />
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
