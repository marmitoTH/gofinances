import styled from 'styled-components'
import { FadeIn } from '../../assets/styles/animations'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${FadeIn} 400ms;
`

export const Main = styled.div`
  width: min(90%, 736px);
  padding: min(5%, 64px);
  border-radius: 5px;
  background: #fff;
`

export const Form = styled.form`
  flex: 1;

  input + input {
    margin-top: 16px;
  }
`

export const Title = styled.h1`
  font-size: min(5vw, 36px);
  margin-top: min(5vw, 64px);
  margin-bottom: min(3vw, 40px);
`

export const Toggle = styled.div`
  margin-top: 16px;
`

export const Button = styled.button`
  width: 100%;
  height: 50px;
  display: block;
  background: #FF872C;
  border-radius: 5px;
  color: #fff;
  margin: 16px 0;
`
