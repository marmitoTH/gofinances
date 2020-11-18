import React, { FormEvent, useState } from 'react'
import api from '../../services/api'
import { useAuth } from '../../hooks/auth'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Container, Form, Footer, Warning, Title, Button } from './styles'
import { AiOutlineWarning } from 'react-icons/ai'
import Uploader from '../../components/Uploader'

function Import() {
  const history = useHistory()
  const { token } = useAuth()
  const [file, setFile] = useState<File>()

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData()
    formData.append('csv', file as Blob)

    await api.post('/transactions/import', formData,
      {
        headers: {
          'authorization': `Bearer ${token}`
        }
      }
    ).then(response => {
      if (response.status === 200) {
        history.push('/dashboard')
        toast.success('Arquivo enviado!')
      }
    }).catch(error => {
      switch (error.response.status) {
        case 400:
          toast.warning('Anexe um arquivo csv!')
          break
      }
    })
  }

  return (
    <Container>
      <Title>Importar transações</Title>
      <Form onSubmit={event => onSubmit(event)}>
        <Uploader onUpload={setFile} />
        <Footer>
          <Warning>
            <AiOutlineWarning />
            <p>Permitidos apenas arquivos CSV</p>
          </Warning>
          <Button>Enviar</Button>
        </Footer>
      </Form>
    </Container>
  )
}

export default Import
