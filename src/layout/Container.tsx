import React from 'react'
import { SContainer } from '../components/styledComponents'

const Container = ({ children }: any) => {
  return (
    <SContainer>
      {children}
    </SContainer>
  )
}

export default Container
