import React, { InputHTMLAttributes } from 'react'
import { Input } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

const TextField = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <Input ref={ref} {...props} />
))

export default TextField
