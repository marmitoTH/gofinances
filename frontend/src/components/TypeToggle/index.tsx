import React, { useState } from 'react'
import { FiArrowDownCircle, FiArrowUpCircle } from 'react-icons/fi'
import { Container, LeftButton, RightButton, Icon } from './styles'

interface TypeToggleProps {
  onChange: Function
}

function TypeToggle({ onChange }: TypeToggleProps) {
  const [type, setType] = useState('income')

  function updateType(type: string) {
    setType(type)
    onChange(type)
  }

  return (
    <Container>
      <LeftButton
        type='button'
        selected={type === 'income'}
        onClick={() => updateType('income')}
      >
        <Icon type={'income'}>
          <FiArrowDownCircle />
        </Icon>
        <p>Income</p>
      </LeftButton>
      <RightButton
        type='button'
        selected={type === 'outcome'}
        onClick={() => updateType('outcome')}
      >
        <Icon type='outcome'>
          <FiArrowUpCircle />
        </Icon>
        <p>Outcome</p>
      </RightButton>
    </Container>
  )
}

export default TypeToggle
