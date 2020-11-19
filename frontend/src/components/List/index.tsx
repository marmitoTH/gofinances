import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import formatCurrency from '../../utils/formatCurrency'
import formatDate from '../../utils/formatDate'
import { FiTrash2 } from 'react-icons/fi'

import {
  Container,
  Header,
  Footer,
  Options,
  OptTitle,
  OptValue,
  OptCategory,
  OptDate,
  Element,
  Title,
  Value,
  Category,
  Date,
  Message,
  RemoveButton
} from './styles'

interface Transaction {
  id: number
  title: string
  value: number
  type: string
  category: string
  date: Date
}

interface ListProps {
  title: string
  transactions: Transaction[]
  onRemove(id: number): void
}

function List({ title, transactions, onRemove }: ListProps) {
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
          <RemoveButton
            type='button'
            onClick={() => onRemove(data.id)}
          >
            <FiTrash2 />
          </RemoveButton>
        </Footer>
      </Element>
    ))
  }

  return (
    <Container>
      <Header>
        {(transactions.length > 0 && (
          <Fragment>
            <h3>{title}</h3>
            <Options>
              <OptTitle>Título</OptTitle>
              <OptValue>Preço</OptValue>
              <OptCategory>Categoria</OptCategory>
              <OptDate>Data</OptDate>
            </Options>
          </Fragment>
        )) || (
            <Message>
              {'Ainda não há transações! '}
              <Link to='/add'>Cadastre</Link>
              {' ou '}
              <Link to='/import'>importe</Link>.
            </Message>
          )}
      </Header>
      {drawElements()}
    </Container>
  )
}

export default List
