import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import { SHeader } from '../components/styledComponents'
import Lottie from "react-lottie"
import HeaderLottie from '../assets/Header-lottie.json'
import TinyDotsImg from "../assets/tiny-dots.png"
import useWindowSize from "../components/hooks/useWindowSize";

const Header = () => {
  const [windowSize, setWindowSize] = useState<number>(0)

  const options = {
    loop: true,
    autoplay: true,
    animationData: HeaderLottie,
  }
  const windowWidth = useWindowSize()

  useEffect(() => {
    setWindowSize(windowWidth)
  }, [windowWidth])

  const lottieSize = windowSize < 400 ? 300 : 420

  return (
    <SHeader>
      <div className="left">
        <h1 className="header-title">Your Bike Electric Update</h1>
        <p className="header-paragraph">
          Dummy text progressive, and affordable
          healthcare, accessible on mobile and online
          for everyone
        </p>
        <SearchBar />
      </div>
      <div className="right">
        <Lottie options={options} height={lottieSize} width={lottieSize} />
      </div>
      <img src={TinyDotsImg} alt="bg dots" className="bg-dots" />
    </SHeader>
  )
}

export default Header
