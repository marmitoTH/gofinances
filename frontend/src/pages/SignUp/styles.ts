import styled from 'styled-components'
import { shade } from 'polished'
import { FadeIn } from '../../assets/styles/animations'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: #5636D3;
`

export const Main = styled.div`
  width: min(90%, 300px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${FadeIn} 400ms;
`

export const Form = styled.form`
  width: 100%;

  button {
    margin: 16px 0;
  }

  input + input {
    margin-top: 16px;
  }
`

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;

  a {
    color: #fff;
    font-size: 14px;
    text-decoration: none;
    transition: color 200ms;

    &:hover {
      color: ${shade(0.2, '#fff')};
    }
  }
`

export const Logo = styled.img`
  width: 250px;
  margin: 50px;
`
