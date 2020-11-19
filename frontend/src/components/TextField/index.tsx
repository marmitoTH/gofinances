import React, { ChangeEvent, InputHTMLAttributes } from 'react'
import { Input } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  filter?: 'integer' | 'decimal'
}

const TextField = React.forwardRef<HTMLInputElement, InputProps>(({ onChange, filter, ...rest }, ref) => {
  let lastValue = ''

  function filterNumeric(value: string) {
    return value.replace(/[^0-9]+/, '')
  }

  function filterDecimal(value: string) {
    return value.replace(/^(?![0-9]+\.?[0-9]*$).*/,
      ((value.length > 0) ? lastValue : ''))
  }

  function trateValue(e: ChangeEvent<HTMLInputElement>) {
    if (filter) {
      let value = e.target.value

      switch (filter) {
        case 'integer':
          value = filterNumeric(value)
          break
        case 'decimal':
          value = filterDecimal(value)
          break
      }

      e.target.value = lastValue = value
    }

    if (typeof onChange !== 'undefined') {
      onChange(e)
    }
  }

  return (
    <Input ref={ref} onChange={(e) => trateValue(e)} {...rest} />
  )
})

export default TextField
