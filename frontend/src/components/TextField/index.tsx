import React, { InputHTMLAttributes } from 'react'
import { Input } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

function TextField(props: InputProps) {
  return (
    <Input {...props} />
  )
}

export default TextField
