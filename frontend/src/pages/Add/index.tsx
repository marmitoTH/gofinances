import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Container, Main, Form, Title, TextArea, Toggle, Button } from './styles'
import TypeToggle from '../../components/TypeToggle'

interface Inputs {
  title: string
  value: number
  type: 'income' | 'outcome'
  category: string
}

function Add() {
  const [type, setType] = useState('income')
  const { register, handleSubmit } = useForm<Inputs>()

  function onSubmit(data: Inputs) {
    console.log(data)
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
