import React from 'react'
import api from '../../services/api'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { Container, Main, Form, Footer, Logo } from './styles'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import logo from '../../assets/images/logo.svg'

interface IFormInputs {
  name: string
  email: string
  password: string
}

function SignIn() {
  const history = useHistory()
  const { register, handleSubmit } = useForm()

  async function onSubmit({ name, email, password }: IFormInputs) {
    await api.post('/users', {
      name,
      email,
      password
    }).then(response => {
      if (response.status === 201) {
        history.push('/')
      }
    })
  }

  return (
    <Container>
      <Main>
        <Logo src={logo} alt='gofinances logo' />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            ref={register}
            name='name'
            type='text'
            placeholder='Nome'
          />
          <TextField
            ref={register}
            name='email'
            type='email'
            placeholder='Email'
          />
          <TextField
            ref={register}
            name='password'
            type='password'
            placeholder='Senha'
          />
          <Button>Cadastrar</Button>
        </Form>
        <Footer>
          <Link to='/'>Já possui uma conta? Voltar para login.</Link>
        </Footer>
      </Main>
    </Container>
  )
}

export default SignIn
