import React from 'react'
import formatCurrency from '../../utils/formatCurrency'
import formatDate from '../../utils/formatDate'
import { Container, Header, Footer, Options, OptTitle, OptValue, OptCategory, OptDate, Element, Title, Value, Category, Date } from './styles'

interface Transaction {
  title: string
  value: number
  type: string
  category: string
  date: Date
}

interface ListProps {
  title: string
  transactions: Transaction[]
}

function List({ title, transactions }: ListProps) {
  function getValue(value: number, type: string) {
    return (((type === 'outcome') ? '- ' : '') + formatCurrency(value))
  }

  function drawElements() {
    return transactions.map((data, key) => (
      <Element key={key}>
        <Title>{data.title}</Title>
        <Value type={data.type}>{getValue(data.value, data.type)}</Value>
        <Footer>
          <Category>{data.category}</Category>
          <Date>{formatDate(data.date)}</Date>
        </Footer>
      </Element>
    ))
  }

  return (
    <Container>
      <Header>
        <h3>{title}</h3>
        <Options>
          <OptTitle>Título</OptTitle>
          <OptValue>Preço</OptValue>
          <OptCategory>Categoria</OptCategory>
          <OptDate>Data</OptDate>
        </Options>
      </Header>
      {drawElements()}
    </Container>
  )
}

export default List
