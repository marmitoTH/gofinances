import React from 'react'
import api from '../../services/api'
import { DeepMap, FieldError, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
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

function SignUp() {
  const history = useHistory()
  const { register, handleSubmit } = useForm<IFormInputs>({
    criteriaMode: 'all'
  })

  async function onSubmit({ name, email, password }: IFormInputs) {
    await api.post('/users', {
      name,
      email,
      password
    }).then(response => {
      if (response.status === 201) {
        history.push('/')
        toast.success('Cadastro efetuado!')
      }
    }).catch(error => {
      switch (error.response.status) {
        case 400:
          toast.error('Email já cadastrado!')
          break
      }
    })
  }

  function onError(error: DeepMap<IFormInputs, FieldError>) {
    if (error.email?.types?.required
      || error.name?.types?.required
      || error.password?.types?.required) {
      toast.warning('Preencha todos os campos!')
    }

    if (error.email?.types?.pattern) {
      toast.warning('Email inválido!')
    }

    if (error.password?.types?.minLength
      || error.password?.types?.maxLength) {
      toast.warning('Password deve conter entre 6 a 32 caracteres!')
    }
  }

  return (
    <Container>
      <Main>
        <Logo src={logo} alt='gofinances logo' />
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <TextField
            ref={register({
              required: true,
            })}
            name='name'
            type='text'
            placeholder='Nome'
          />
          <TextField
            ref={register({
              required: true,
              pattern: /.+@.+/
            })}
            name='email'
            type='email'
            placeholder='Email'
          />
          <TextField
            ref={register({
              required: true,
              minLength: 6,
              maxLength: 32
            })}
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

export default SignUp
