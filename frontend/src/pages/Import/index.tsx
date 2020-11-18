import React from 'react'
import { Container, Main, Footer, Warning, Title, Button } from './styles'
import { AiOutlineWarning } from 'react-icons/ai'
import Uploader from '../../components/Uploader'

function Import() {
  return (
    <Container>
      <Title>Importar transações</Title>
      <Main>
        <Uploader onUpload={() => { }} />
        <Footer>
          <Warning>
            <AiOutlineWarning />
            <p>Permitidos apenas arquivos CSV</p>
          </Warning>
          <Button>Enviar</Button>
        </Footer>
      </Main>
    </Container>
  )
}

export default Import
