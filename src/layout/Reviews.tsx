import { SReviews } from '../components/styledComponents'
import CyclistImg from '../assets/review-one.png'
import { icons } from '../components/constants'
import TinyDotImg from "../assets/tiny-dots-2.png"
import TinyDotImg2 from "../assets/tiny-dots-3.png"

const Reviews = () => {
  return (
    <SReviews>
      <section className="testimonials">
        <div className="title-box">
          <h3 className="title">What our customers are saying</h3>
          <span className="line"></span>
        </div>
        <div className="container">
          <div className="testimonial">
            <img src={TinyDotImg2} alt="bg dot" className="bg-dots-two" />
            <div className="client-bio">
              <img src={CyclistImg} alt="testimonial" className='image' />
              <div className="bio">
                <h3 className="name">Edware Newgate</h3>
                <p className="occupation">Pro Cyclist</p>
              </div>
            </div>
            <div className="client-review">
              <p className="review">
                Dummy Text patient engagement app and
                web portal allow you to access information instantaneously (no tedeous form, long calls,
                or administrative hassle) and securely
              </p>
            </div>
          </div>
        </div>

      </section>
      <div className="navigation">
        <div className="dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <h3 className="arrow">
          <icons.rightArrow />
        </h3>
      </div>
      <img src={TinyDotImg} alt="dots" className="bg-dots" />
    </SReviews >
  )
}

export default Reviews
