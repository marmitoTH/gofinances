import React from 'react'
import formatCurrency from '../../utils/formatCurrency'
import { Container, Header, Icon } from './styles'
import { FiArrowDownCircle, FiArrowUpCircle } from 'react-icons/fi'
import { AiOutlineDollar } from 'react-icons/ai'

interface Props {
  title: string
  value: number
  type?: string
  secondary?: boolean
}

function Card(props: Props) {
  function getIcon() {
    switch (props.type) {
      default:
      case 'income':
        return <FiArrowDownCircle />
      case 'outcome':
        return <FiArrowUpCircle />
      case 'total':
        return <AiOutlineDollar />
    }
  }

  return (
    <Container secondary={props.secondary}>
      <Header>
        <p>{props.title}</p>
        <Icon type={props.type}>{getIcon()}</Icon>
      </Header>
      <h1>{formatCurrency(props.value)}</h1>
    </Container>
  )
}

export default Card
