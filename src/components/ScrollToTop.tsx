import React from 'react'
import { icons } from './constants'
import { SScrollToTop } from './styledComponents'

const ScrollToTop = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <SScrollToTop onClick={scrollToTop}>
      <span><icons.upArrowFilled /></span>
    </SScrollToTop>
  )
}

export default ScrollToTop
