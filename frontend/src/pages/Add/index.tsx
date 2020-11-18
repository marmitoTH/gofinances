import React, { useState } from 'react'
import { DeepMap, FieldError, useForm } from 'react-hook-form'
import { useAuth } from '../../hooks/auth'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
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
  const { register, handleSubmit } = useForm<Inputs>({
    criteriaMode: 'all'
  })

  async function onSubmit(data: Inputs) {
    await api.post('/transactions',
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
        toast.success('Transação cadastrada!')
      }
    })
  }

  function onError(error: DeepMap<Inputs, FieldError>) {
    if (error.category?.types?.required
      || error.title?.types?.required
      || error.type?.types?.required
      || error.value?.types?.required) {
      toast.warning('Preencha todos os campos!')
    }

    if (error.value?.types?.pattern) {
      toast.warning('Preço deve conter apenas números!')
    }
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit, onError)}>
      <Title>Cadastrar</Title>
      <Main>
        <Form>
          <TextArea
            ref={register({
              required: true,
              maxLength: 32
            })}
            name='title'
            placeholder='Nome'
          />
          <TextArea
            ref={register({
              required: true,
              pattern: /^[0-9]+(\.[0-9]+)?$/
            })}
            name='value'
            type='number'
            placeholder='Preço'
          />
          <TextArea
            ref={register({
              required: true,
              maxLength: 32
            })}
            name='category'
            placeholder='Categoria'
          />
          <input
            ref={register({
              required: true,
              pattern: /^(income|outcome)$/
            })}
            name='type'
            value={type}
            type='hidden'
          />
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
