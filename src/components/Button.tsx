import React from 'react'
import { SButton } from './styledComponents'

const Button = ({ children }: any) => {
  return (
    <SButton>
      {children}
    </SButton>
  )
}

export default Button
