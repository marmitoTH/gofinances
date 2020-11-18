import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../hooks/auth'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import { Container, Main, Form, Title, TextArea, Toggle, Button } from './styles'
import TypeToggle from '../../components/TypeToggle'

interface Inputs {
  title: string
  value: number
  type: 'income' | 'outcome'
  category: string
}

function Add() {
  const { token } = useAuth()
  const history = useHistory()
  const [type, setType] = useState('income')
  const { register, handleSubmit } = useForm<Inputs>()

  function onSubmit(data: Inputs) {
    api.post('/transactions',
      {
        title: data.title,
        value: data.value,
        type: data.type,
        category: data.type
      },
      {
        headers: {
          authorization: `Bearer ${token}`
        }
      }
    ).then(response => {
      if (response.status === 201) {
        history.push('/dashboard')
      }
    })
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Title>Cadastrar</Title>
      <Main>
        <Form>
          <TextArea ref={register} name='title' placeholder='Nome' />
          <TextArea ref={register} name='value' placeholder='Preço' />
          <TextArea ref={register} name='category' placeholder='Categoria' />
          <input ref={register} name='type' value={type} type='hidden' />
          <Toggle>
            <TypeToggle onChange={setType} />
          </Toggle>
          <Button>Enviar</Button>
        </Form>
      </Main>
    </Container>
  )
}

export default Add
