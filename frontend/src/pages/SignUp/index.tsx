import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Main, Form, Footer, Logo } from './styles'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import logo from '../../assets/images/logo.svg'

function SignIn() {
  return (
    <Container>
      <Main>
        <Logo src={logo} alt='gofinances logo' />
        <Form>
          <TextField name='name' type='text' placeholder='Nome' />
          <TextField name='email' type='email' placeholder='Email' />
          <TextField name='password' type='password' placeholder='Senha' />
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
