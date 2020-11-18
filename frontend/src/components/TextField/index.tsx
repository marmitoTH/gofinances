import React, { InputHTMLAttributes } from 'react'
import { Input } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement>

const TextField = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <Input ref={ref} {...props} />
))

export default TextField
