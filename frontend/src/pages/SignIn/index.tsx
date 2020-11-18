import React from 'react'
import { Link } from 'react-router-dom'
import { DeepMap, FieldError, useForm } from 'react-hook-form'
import { useAuth } from '../../hooks/auth'
import { toast } from 'react-toastify'
import { Container, Main, Form, Footer, Logo, Subtitle } from './styles'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import logo from '../../assets/images/logo.svg'

interface IFormInputs {
  email: string
  password: string
}

function SignIn() {
  const { signIn } = useAuth()
  const { register, handleSubmit } = useForm<IFormInputs>({
    criteriaMode: 'all'
  })

  async function onSubmit(data: { email: string, password: string }) {
    try {
      await signIn({
        email: data.email,
        password: data.password
      })
    } catch {
      toast.error('Email ou senha inválidos!')
    }
  }

  function onError(error: DeepMap<IFormInputs, FieldError>) {
    if (error.email?.types?.required
      || error.password?.types?.required) {
      toast.warning('Preencha todos os campos!')
    }

    if (error.email?.types?.pattern) {
      toast.warning('Email inválido!')
    }
  }

  return (
    <Container>
      <Main>
        <Logo src={logo} alt='gofinances logo' />
        <Subtitle>Controle o seu dinheiro!</Subtitle>
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <TextField
            ref={register({
              required: true,
              pattern: /.+@.+/
            })}
            name='email'
            placeholder='Email'
          />
          <TextField
            ref={register({
              required: true
            })}
            name='password'
            type='password'
            placeholder='Password'
          />
          <Button>Entrar</Button>
        </Form>
        <Footer>
          <Link to='/forgot'>Esqueci minha senha</Link>
          <Link to='/register'>Criar conta</Link>
        </Footer>
      </Main>
    </Container>
  )
}

export default SignIn
