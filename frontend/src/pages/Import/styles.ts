import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Main = styled.main`
  flex: 1;
  width: min(90%, 736px);
  padding: min(5%, 64px);
  background: #fff;
  border-radius: 5px;
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 21px 0;

  @media (min-width: 1000px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const Warning = styled.div`
  display: flex;
  align-items: center;
  color: #FF872C;
  margin-bottom: 20px;
  font-size: 23px;

  p {
    margin-left: 13px;
    font-size: min(3.5vw, 12px);
    color: #969CB3;
  }

  @media (min-width: 1000px) {
    margin: 0;
  }
`

export const Title = styled.h1`
  font-size: min(5vw, 36px);
  margin-top: min(5vw, 64px);
  margin-bottom: min(3vw, 40px);
`

export const Button = styled.button`
  width: 100%;
  height: 50px;
  display: block;
  border-radius: 5px;
  color: #fff;
  background: #FF872C;
  transition: background 200ms;

  @media (min-width: 1000px) {
    max-width: 224px;
  }

  &:hover {
    background: ${darken(0.1, '#FF872C')}
  }
`
