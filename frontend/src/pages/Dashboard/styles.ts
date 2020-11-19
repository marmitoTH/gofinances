import styled from 'styled-components'
import { FadeIn } from '../../assets/styles/animations'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${FadeIn} 400ms;
`

export const Main = styled.main`
  width: min(90%, 1120px);
  margin: 30px 0;
`
