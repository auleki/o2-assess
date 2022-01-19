import React from 'react'
import { SIconButton } from "./styledComponents";

const IconButton = ({ children, inActive }: any) => {
  return (
    <SIconButton inActive={inActive}>
      <span>
        {children}
      </span>
    </SIconButton>
  )
}

export default IconButton
