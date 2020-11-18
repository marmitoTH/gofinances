import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../hooks/AuthContext'
import { Container, Main, Form, Footer, Logo, Subtitle } from './styles'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import logo from '../../assets/images/logo.svg'

function SignIn() {
  const { register, handleSubmit } = useForm()
  const { signIn, user } = useAuth()

  console.log(user)

  return (
    <Container>
      <Main>
        <Logo src={logo} alt='gofinances logo' />
        <Subtitle>Controle o seu dinheiro!</Subtitle>
        <Form onSubmit={handleSubmit(signIn)}>
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
