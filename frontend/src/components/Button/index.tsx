import React, { ButtonHTMLAttributes } from 'react'
import { Button as Btn } from './styles'
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

function Button({ children, ...rest }: ButtonProps) {
  return (
    <Btn {...rest}>
      {children}
    </Btn>
  )
}

export default Button
