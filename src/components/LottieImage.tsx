import React from 'react'
import Lottie from 'react-lottie'


const LottieImage = ({ image }: any) => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: image,
  }
  return (
    <Lottie options={options} height={200} width={200} />
  )
}

export default LottieImage
