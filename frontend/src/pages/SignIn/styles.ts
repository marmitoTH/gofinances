import styled from 'styled-components'
import { shade } from 'polished'

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
`

export const Subtitle = styled.strong`
  color: #fff;
  margin: 25px 0;
`
