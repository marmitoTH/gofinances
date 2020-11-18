import React from 'react'
import { Container, Element } from './styles'
import Card from '../Card'

interface Props {
  income: number
  outcome: number
  total: number
}

function Balance(props: Props) {
  return (
    <Container>
      <Element>
        <Card
          title='Entradas'
          value={props.income}
          type='income'
        />
      </Element>
      <Element>
        <Card
          title='Saídas'
          value={props.outcome}
          type='outcome'
        />
      </Element>
      <Element>
        <Card
          title='Total'
          value={props.total}
          type='total'
          secondary
        />
      </Element>
    </Container>
  )
}

export default Balance
